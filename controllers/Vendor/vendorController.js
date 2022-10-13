const Vendor = require("../../model/vendor")

exports.createVendor = async (req,res) => {
    console.log(req.body)
    try {
        const vendor = await Vendor.create({name:req.body.name})
        res.status(200).json({message:"Vendor created !",vendor})
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"Something went wrong !",error})
    }
}

exports.updateVendor = async (req,res) => {
    try {
        const vendor = await Vendor.findByIdAndUpdate({_id:req.body.id},{name:req.body.name})
        res.status(200).json({message:"Vendor updated !",vendor})

    } catch (error) {
        res.status(400).json({message:"Something went wrong !",error})
    }
}


exports.getVendors = async (req,res) => {
    try {
        let condition = {}
        if(req.query.name){
            condition["name"] = new RegExp(req.query.name,"i")
        }
        const vendor = await Vendor.find(condition).sort({createdAt:-1})
        res.status(200).json({message:"All vendors !",data:vendor})

    } catch (error) {
        console.log(error)
        res.status(400).json({message:"Something went wrong !",error})
    }
}
exports.deleteVendor = async (req,res) => {
    try {
        const vendor = await Vendor.findByIdAndDelete({_id:req.params.id})
        res.status(200).json({message:"Vendor deleted !",data:vendor})

    } catch (error) {
        res.status(400).json({message:"Something went wrong !",error})
    }
}
