const mongoose = require("mongoose");


const shortsSchema = new mongoose.Schema({
    descri: String,
    size: String,
    categories: String,
    img: String
})

module.exports = mongoose.model("Blusas", shortsSchema)