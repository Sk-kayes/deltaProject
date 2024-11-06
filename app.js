if(process.env.NODE_ENV != "production") {
	require('dotenv').config();
}
function capitalizeFirstLetters(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const Listing = require("./models/listing.js");
const Review = require("./models/reviews.js");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/expressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const { isloggedIn, saveRedirectUrl, isOwner, isAuthor } = require("./middleware.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const { parseArgs } = require("util");
const multer  = require('multer');
const {storage} = require("./cloudConfig.js");
// const { log } = require('console');
const upload = multer({ storage });
const app = express();
const port = 6969;

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.engine("ejs", ejsMate);
const dbUrl = process.env.ATLASDB_URL;
main()
	.then(() => {
		console.log("Connected to Database");
	})
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect(dbUrl);
}

const store = MongoStore.create({
	mogoUrl: dbUrl,
	crypto: {
		secret: process.env.SECRET,
	},
	touchAfter: 24*3600
});

store.on("error", ()=> {
	console.log("Error in mongo store: ", error); 
})

const sessionOptions = {
	store: store,
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: true,
	cookie: {
		expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
		maxAge: 7 * 24 * 60 * 60 * 1000,
		httpOnly: true,
	},
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
	res.locals.success = req.flash("success");
	res.locals.error = req.flash("error");
	res.locals.currUser = req.user;
	next();
});

const validateReview = (req, res, next) => {
	let { error } = reviewSchema.validate(req.body);

	if (error) {
		let errMsg = error.details.map((el) => el.message).join(",");
		throw new ExpressError(404, errMsg);
	} else {
		next();
	}
};

// Get signup form to register users.
app.get("/signup", (req, res) => {
	res.render("./listing/signUpForm.ejs");
});

//Register the user into database.
app.post(
	"/signup",
	wrapAsync(async (req, res) => {
		try {
			let { username, email, password } = req.body;
			const newUser = new User({ email, username });
			const registerdUser = await User.register(newUser, password);
			req.login(registerdUser, (err) => {
				if (err) {
					return next(err);
				}
				req.flash("success", "Welcome to Wanderlust");
				res.redirect("/listings");
			});
		} catch (err) {
			req.flash("error", err.message);
			res.redirect("/signup");
		}
	})
);

// Get login form to login users.
app.get("/login", (req, res) => {
	res.render("./listing/logInForm.ejs");
});

// Login into Wanderlust
app.post(
	"/login",
	saveRedirectUrl,
	passport.authenticate("local", {
		failureRedirect: "/login",
		failureFlash: true,
	}),
	async (req, res) => {
		req.flash("success", "Welcome to Wanderlust");
		let url = res.locals.redirectUrl || "/listings";
		res.redirect(url);
	}
);

// Logout Rout
app.get("/logout", (req, res, next) => {
	req.logOut((err) => {
		if (err) {
			return next(err);
		} else {
			req.flash("success", "Successfully logged out!!");
			res.redirect("/listings");
		}
	});
});

// Show all the list
app.get(
	"/listings",
	wrapAsync(async (req, res) => {
		let allListing = await Listing.find({});
		res.render("./listing/index.ejs", { allListing });
	})
);

// Serve the new list form
app.get("/listings/new", isloggedIn, (req, res) => {
	res.render("listing/newList.ejs");
});

// Create new List
app.post(
	"/listings",
	isloggedIn,
	upload.single("image"),
	wrapAsync(async (req, res, next) => {
		let url = req.file.path;
		let filename = req.file.filename;
		
		let { title, description, image, price, location, country, category} = req.body;
		let capitalCountry = capitalizeFirstLetters(country);
		let capitalcategory = capitalizeFirstLetters(category);
		
		
		let list = new Listing({
			title: title,
			description: description,
			image: image,
			price: price,
			location: location,
			country: capitalCountry,
			category: capitalcategory
		});
		list.owner = req.user._id;
		list.image = {url, filename};
		await list.save();
		req.flash("success", "New list added!");
		res.redirect("/listings");
	})
);

// Serve the List update form
app.get(
	"/listings/:id/edit",
	isloggedIn,
	isOwner,
	wrapAsync(async (req, res) => {
		let { id } = req.params;
		let listDetails = await Listing.findById(id);
		if(!listDetails) {
			req.flash("error", "List is not available!!");
			res.redirect("/listings");
		}
		let originalImageUrl = listDetails.image.url;
		originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
		res.render("./listing/edit.ejs", { listDetails, originalImageUrl });
	})
);

// List Update
app.put(
	"/listings/:id",
	isloggedIn,
	isOwner,
	upload.single("image"),
	wrapAsync(async (req, res) => {
		let { id } = req.params;
		let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
		let { title, description, price, location, country, category } = req.body;
		let capitalCountry = capitalizeFirstLetters(country);
		let capitalcategory = capitalizeFirstLetters(category);
		await Listing.findByIdAndUpdate(id, {
			title: title,
			description: description,
			price: price,
			location: location,
			country: capitalCountry,
			category: capitalcategory
		})

		if(typeof req.file !== "undefined") {
			let url = req.file.path;
			let filename = req.file.filename;
			listing.image = {url, filename};
			await listing.save();
		}

		req.flash("success", "List Updated!");
		res.redirect(`/listings/${id}`);
	})
);

// Delete The List
app.delete(
	"/listings/:id",
	isloggedIn,
	isOwner,
	wrapAsync(async (req, res) => {
		let { id } = req.params;
		await Listing.findByIdAndDelete(id);

		req.flash("success", "List Deleted!");
		res.redirect("/listings");
	})
);

// Search basis on country name
app.get('/listings/country', wrapAsync(async(req, res) => {
    const country = req.query.country;
	let countryList = await Listing.find({country:country});
	if(country === "") {
		res.redirect("/listings");
	}else if(countryList.length == 0) {
		req.flash("error", "This country is not listed yet!!");
		res.redirect("/listings");
	} else {
		res.render("./listing/country.ejs", {countryList});
	}
	})
);

// Search basis on category
app.get('/listings/category', wrapAsync(async(req, res) => {
	const category = req.query.category;
	let categoryList = await Listing.find({category:category});
    res.render("./listing/category.ejs", {categoryList});
	})
);
// Add Review
app.post(
	"/listings/:id/reviews",
	isloggedIn,
	validateReview,
	wrapAsync(async (req, res) => {
		let listing = await Listing.findById(req.params.id);
		let newReview = new Review(req.body.review);
		newReview.author = req.user._id
	
		listing.review.push(newReview);
	
		await newReview.save();
		await listing.save();
	
		req.flash("success", "Review Added!");
		res.redirect(`/listings/${listing._id}`);
	})
);

// Delete The Review
app.delete(
	"/listings/:id/reviews/:revId",
	isloggedIn,
	isAuthor,
	wrapAsync(async (req, res) => {
		let { id, revId } = req.params;
		await Listing.findByIdAndUpdate(id, { $pull: { review: revId } });
		await Review.findByIdAndDelete(revId);
		req.flash("success", "Review Deleted!");
		res.redirect(`/listings/${id}`);
	})
);

// Show The perticular List
app.get(
	"/listings/:id",
	wrapAsync(async (req, res) => {
		let { id } = req.params;
		let listDetails = await Listing.findById(id).populate({path: "review", populate: {path: "author"}}).populate("owner");
		if (!listDetails) {
			req.flash("error", "List does not exist!!");
			res.redirect("/listings");
		}
		res.render("./listing/showList.ejs", { listDetails });
	})
);

app.all("*", (req, res, next) => {
	next(new ExpressError(400, "Not available!!"));
});

app.use((err, req, res, next) => {
	let { errorCode = 400, message = "Something went wrong !!" } = err;
	res.render("error.ejs", { message });
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});