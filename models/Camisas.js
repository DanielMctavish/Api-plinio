const mongoose = require("mongoose");


const camisasSchema = new mongoose.Schema({
    descri: String,
    size: String,
    categories: String,
    img: String
})

module.exports = mongoose.model("Blusas", camisasSchema)