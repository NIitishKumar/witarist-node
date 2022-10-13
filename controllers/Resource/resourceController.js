const Resource = require("../../model/Resource")
const fs = require("fs")

exports.createResource = async (req,res) => {
    try {
        const file = fs.readFileSync(req.file.path)
        const encFile = file.toString("base64")
        console.log(encFile,new Buffer.from(encFile,"base64"))
        const data = await Resource.create({...req.body,technology:req.body.tech,file,file:{data: Buffer.from(encFile,'base64'),contentType:req.file.mimetype}})
        res.status(200).json({message:"Resource created !",data})
    } catch (error) {
        res.status(400).json({message:"Something went wrong !",error})
    }
}

exports.getResources = async (req,res) => {
    try {
        const data = await Resource.find({})
        res.status(200).json({message:"Get resources !",data})
    } catch (error) {
        res.status(400).json({message:"Something went wrong !",error})
    }
}