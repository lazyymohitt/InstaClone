 const express =  require("express")
 //  const createPostController = require("../controllers/post.controller")
 const {createPostController} = require("../controllers/post.controller")

const multer  = require ("multer")


const upload  =  multer({storage:multer.memoryStorage()})




 const postRouter =  express.Router()

 postRouter.post("/",upload.single("img"),createPostController )


 module.exports = postRouter