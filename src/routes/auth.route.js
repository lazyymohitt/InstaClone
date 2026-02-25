const express = require("express");
const userModel = require("../models/user.model");
const jwt = require('jsonwebtoken')

const crypto = require("crypto")

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { username, email, password, profileImage, bio } = req.body;

  //

  const isUserAlreadyExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });
  if (isUserAlreadyExist) {
    return res.status(409).json({
      message:
        "User already Exists" + iUserAlreadyExist.email === email
          ? "Email Is already Used"
          : "Username Is already use:",
    });
  }

  const hash = crypto.createHash('sha256').update(password).digest('hex')

//   this code is used to create the user in out dataBase
  const user = await userModel.create({
    email,
    username,
    bio,
    profileImage,
    password:hash
  })

  const token = jwt.sign({
    id:user._id
  }, process.env.JWT_SECRET)
});
