const mongoose = require("mongoose");
const data = require("./data.js");
const Listing = require("../models/listing.js");

main()
    .then(()=> {console.log("Connected to Database");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const initDb = async () => {
    await Listing.deleteMany({});
    data.data = data.data.map((obj)=> ({...obj, owner: "6726632564c2e5736b811372"}));
    await Listing.insertMany(data.data);
    console.log("Data inserted");
}

initDb();