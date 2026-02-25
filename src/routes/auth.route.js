const express = require("express");
const userModel = require("../models/user.model");

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
});
