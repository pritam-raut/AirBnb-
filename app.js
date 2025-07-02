const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Mongo_URL = "mongodb://127.0.0.1:27017/wonderlust";

main().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

async function main() {
    await mongoose.connect(Mongo_URL);
}

app.get("/", (req ,res) => {
    res.send("lets go");
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});

