const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const { Folders } = require("@imagekit/nodejs/resources.js");
const jwt = require("jsonwebtoken");
const likeModel = require("../models/like.model")

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PVT_KEY,
});

async function createPostController(req, res) {
  try {
    // here we have set the ImageKitCode

    const file = await imagekit.files.upload({
      file: await toFile(Buffer.from(req.file.buffer), "file"),
      fileName: "Test",
      folder: "User_Posts",
    });

    const post = await postModel.create({
      imageUrl: file.url,
      caption: req.body.caption,
      user: req.user.id,
    });

    return res.status(201).json({
      message: "Post Created SuccessFully",
      post,
    });
  } catch (error) {
    console.error("Error in createPostController:", error);
    return res.status(500).json({
      message: "Something went wrong while creating post",
      error: error.message,
    });
  }
}

async function getPostController(req, res) {
  const userId = req.user.id;

  const posts = await postModel.find({
    user: userId,
  });

  res.status(200).json({
    message: "Post Fetched Succesfully  ",
    posts,
  });
}

async function getPostDetailsController(req, res) {
  const userId = req.user.id;

  const postId = req.params.postId;

  //  fetching the post here

  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: "Post Not found",
    });
  }
  //  Here I am Using .toString Method because in POstUSer I got ObjectId and IN UserID we get Id

  const isValidUser = post.user.toString() === userId;

  if (!isValidUser) {
    return res.status(403).json({
      message: "Forbidden Content",
    });
  }

  return res.status(200).json({
    message: "Post Fetched Succesfully",
    post,
  });
}

async function likePostController (req,res) {

     const username = req.user.username;

     const postId = req.params.postId;

     const post = await postModel.findById(postId);

     if(!post){
       return res.status(404).json({
        message:"The Post which You're requesting doesn't exists"
      })
     }

     const like  = await likeModel.create({
      post: postId,
      user: username
     })

     res.status(200).json({
      message:"Post liked Succesfully",
      like
     })
}

async function unlikePostController(req,res) {

  const postId = req.params.postId
  const username= req.user.username 


  const isLiked  =  await likeModel.findOne({
    post:postId,
    user:username
  })

  if(!isLiked){
    return res.status(400).json({
      message:"Post Didn't Liked"
    })
  }

  await likeModel.findOneAndDelete({_id:isLiked._id})


  return res.status(200).json({
    message:"Post UnLiked SuccessFully"
  })
  
}

async function getFeedController(req,res) {
  try {
    const user = req.user 
    const posts = await Promise.all((await postModel.find().sort({_id:-1}).populate("user").lean())
    .map(async(post)=>{

      const isLiked = await likeModel.findOne({
        user:user.username,
        post:post._id
      })
      post.isLiked = Boolean(isLiked)

      return post
    }))

    return res.status(200).json({
      message: "Feed Fetched Successfully",
      posts,
    });
  } catch (error) {
    console.error("Error in getFeedController:", error);
    return res.status(500).json({
      message: "Something went wrong while fetching feed",
      error: error.message,
    });
  }
}

 
module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,likePostController,
  getFeedController,
  unlikePostController
};
