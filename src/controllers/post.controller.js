const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const { Folders } = require("@imagekit/nodejs/resources.js");
const jwt = require("jsonwebtoken");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PVT_KEY,
});

async function createPostController(req, res) {
 

  try {
    let decoded = null;
    const token = req.cookies.token;

    //   now checking the token whether it is correct or wrong

    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return res.status(401).json({
        message: "Userr Not Authorized",
      });
    }

    if (!token) {
      return res.status(401).json({
        message: "Token not Proviedd !! Unauthorized access",
      });
    }

    // here we have set the ImageKitCode

    const file = await imagekit.files.upload({
      file: await toFile(Buffer.from(req.file.buffer), "file"),
      fileName: "Test",
      folder: "User_Posts",
    });
    

    const post = await postModel.create({
      imageUrl: file.url,
      caption: req.body.caption,
      user: decoded.id,
    });

    res.status(201).json({
      message: "Post Created SuccessFully",
      post
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Something Went wrong",
    });
  }
}

module.exports = {
  createPostController,
};
