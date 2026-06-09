 const express =  require("express")
 //  const createPostController = require("../controllers/post.controller")
 const postController =  require("../controllers/post.controller")
 const {createPostController, getPostController,getFeedController} = require("../controllers/post.controller")

const identifyUser =  require("../middlewares/auth.middleware")









const multer  = require ("multer")


const upload  =  multer({storage:multer.memoryStorage()})




 const postRouter =  express.Router()

 postRouter.post("/",upload.single("img"),identifyUser,createPostController )

 postRouter.get("/",identifyUser,getPostController)


 postRouter.get("/details/:postId",identifyUser, postController.getPostDetailsController)


 /**
  * @routes POST /api/posts/like/:postId
  * @description like a post to the provided Post Id in the request Params 
  */ 


 postRouter.post("/like/:postId", identifyUser ,postController.likePostController )

 /**
  * @route POST /api/posts/unlike/:postID
  * @description to unlike the post 
  */
 postRouter.post("/unlike/:postId", identifyUser ,postController.unlikePostController )

/**
 * @route Get /api/posts/feed
 * @description get alll the posts of the login USer
 * @access private
 */

postRouter.get("/feed",identifyUser,postController.getFeedController)
 


 module.exports = postRouter