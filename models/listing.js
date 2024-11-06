const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const Review = require("./reviews.js");

const listShema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        url: String,
        filename: String
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    review: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    category: {
        type: String,
        required: true
    }
});

listShema.post("findOneAndDelete", async(listing)=> {
    if(listing) {
        await Review.deleteMany({_id: {$in: listing.review}});
    }
});

const Listing = mongoose.model("Listing", listShema);
module.exports = Listing;