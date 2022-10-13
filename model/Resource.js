const mongoose = require("mongoose")

const Resource = new mongoose.Schema({
    name:{type:String},
    file:{data:Buffer,contentType: String},
    vendorName:{type:String},
    technology:[]
},{timestamps:true,versionKey:false})

module.exports = mongoose.model("Resource",Resource)