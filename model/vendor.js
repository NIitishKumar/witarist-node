const mongoose = require("mongoose")

const VendorSchema = new mongoose.Schema({
    name:{type:"String"}
},{timestamps:true,versionKey:false})

module.exports = mongoose.model("Vendor",VendorSchema)