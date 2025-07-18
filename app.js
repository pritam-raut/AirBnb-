const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const  MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const path = require("path");   

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

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
});

//index route

app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
});

// read route

app.get("/listings/:id", async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
});
// app.get("/test", async (req, res) => {
//     let sempleListing = new Listing({
//         tittle: "Sample Listing",
//         description: "This is a sample listing description.",
//         image: "https://example.com/image.jpg",
//         price: 100,
//         location: "Sample Location",
//         country: "Sample Country"
//     });
//     await sempleListing.save();
//     console.log("Sample listing saved:");
//     res.send("tested");
// });

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});

