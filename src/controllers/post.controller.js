const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const { Folders } = require("@imagekit/nodejs/resources.js");
const jwt = require("jsonwebtoken");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PVT_KEY,
});

async function createPostController(req, res) {
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

  res.status(201).json({
    message: "Post Created SuccessFully",
    post,
  });

  res.status(500).json({
    message: "Something Went wrong",
  });
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
    return res.staus(404).json({
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
module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
};
