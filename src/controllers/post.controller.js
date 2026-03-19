const postModel = require("../models/post.model")

const ImageKit , {toFile}  = require ("@imagekit/nodejs")




async function createPostController(req,res){
    console.log(req.body, req.file)
    
}


module.exports = {
    createPostController
}