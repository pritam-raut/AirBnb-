const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const  MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req ,res) => {
    res.send("lets go");
})

app.get("/test", async (req, res) => {
    // let sempleListing = new Listing({
    //     tittle: "Sample Listing",
    //     description: "This is a sample listing description.",
    //     image: "https://example.com/image.jpg",
    //     price: 100,
    //     location: "Sample Location",
    //     country: "Sample Country"
    // });
    // await sempleListing.save();
    // console.log("Sample listing saved:");
    // res.send("tested");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});

