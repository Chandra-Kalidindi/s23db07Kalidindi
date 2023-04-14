const mongoose = require("mongoose")
const gasSchema = mongoose.Schema({
    gas_name: String,
    quantity: Number,
    types: String
})
module.exports = mongoose.model("gas",gasSchema)