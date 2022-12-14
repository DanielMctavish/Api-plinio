const mongoose = require("mongoose");


const blusasSchema = new mongoose.Schema({
    descri: String,
    size: String,
    categories: String
})

module.exports = mongoose.model("Blusas", blusasSchema)