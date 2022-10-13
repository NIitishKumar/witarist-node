const express = require("express")
var multer = require('multer');
const { createResource, getResources } = require("../controllers/Resource/resourceController");


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split('/')[1];
        console.log(file)
         cb(null, Date.now() + "." +ext);
    },
  });


  
  const upload = multer({ storage: storage }).single('file');
const router = express.Router()

router.post("/",upload,createResource)
router.get("/",getResources)

module.exports = router