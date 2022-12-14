const mongoose = require("mongoose");


const calcasSchema = new mongoose.Schema({
    descri: String,
    size: String,
    categories: String
})

module.exports = mongoose.model("Blusas", calcasSchema)