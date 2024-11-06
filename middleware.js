const Listing = require("./models/listing.js");
const Review = require("./models/reviews.js");

module.exports.isloggedIn = (req, res, next)=> {
    if(!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
		req.flash("error", "You must be logged in!!");
		return res.redirect("/login");
	}
    next();
}

module.exports.saveRedirectUrl = (req, res, next)=> {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req, res, next)=> {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)) {
        req.flash("error", "You don't have the permission!!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.isAuthor = async (req, res, next)=> {
    let {id, revId} = req.params;
    let review = await Review.findById(revId);
    if(!review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "You don't have the permission!!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}