const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
})

userSchema.plugin(passportLocalMongoose);// Passport-local-mongoose automatically add userName, hash and salt and some methods, so we not add it.
module.exports = mongoose.model("User", userSchema);