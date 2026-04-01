 const express =  require("express")
 //  const createPostController = require("../controllers/post.controller")
 const {createPostController, getPostController} = require("../controllers/post.controller")
 const postController =  require("../controllers/post.controller")

const multer  = require ("multer")


const upload  =  multer({storage:multer.memoryStorage()})




 const postRouter =  express.Router()

 postRouter.post("/",upload.single("img"),createPostController )

 postRouter.get("/",getPostController)


 postRouter.get("/details/:postId", postController.getPostDetailsController)


 module.exports = postRouter