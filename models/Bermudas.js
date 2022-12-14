const mongoose = require("mongoose");


const bermudasSchema = new mongoose.Schema({
    descri: String,
    size: String,
    categories: String
})

module.exports = mongoose.model("Blusas", bermudasSchema)