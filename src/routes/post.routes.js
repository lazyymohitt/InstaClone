 const express =  require("express")
 //  const createPostController = require("../controllers/post.controller")
 const {createPostController, getPostController} = require("../controllers/post.controller")
 const postController =  require("../controllers/post.controller")

const identifyUser =  require("../middlewares/auth.middleware")









const multer  = require ("multer")


const upload  =  multer({storage:multer.memoryStorage()})




 const postRouter =  express.Router()

 postRouter.post("/",upload.single("img"),identifyUser,createPostController )

 postRouter.get("/",identifyUser,getPostController)


 postRouter.get("/details/:postId",identifyUser, postController.getPostDetailsController)


 module.exports = postRouter