 const express =  require("express")
 const postRouter =  express.Router()
//  const createPostController = require("../controllers/post.controller")
 const postController = require("../controllers/post.controller")


 postRouter.post("/", postController.createPostController)


 module.exports = postRouter