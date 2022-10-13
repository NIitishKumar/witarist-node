require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose");
const vendorRoutes = require("./routes/vendorRoutes")
const resourceRoutes = require("./routes/resourceRoute")
const cors = require("cors")


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("uploads"))

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(res => {
    console.log("DB Connected")
}).catch(err => {
    console.log(err)
})


app.use("/vendor",vendorRoutes)
app.use("/resource",resourceRoutes)


app.listen(process.env.PORT || 3000,err => {
    if(!err){
        console.log(`Server is running on port ${process.env.PORT || 3000}`)
    }
} )