const mongoose = require("mongoose");


const vestidosSchema = new mongoose.Schema({
    descri: String,
    size: String,
    categories: String
})

module.exports = mongoose.model("Blusas", vestidosSchema)