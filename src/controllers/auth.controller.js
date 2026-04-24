const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

async function registerController(req, res) {
  const { username, email, password, profileImage, bio } = req.body;
  //
const isUserAlreadyExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });
  if (isUserAlreadyExist) {
    return res.status(409).json({
      message:
        isUserAlreadyExist.email === email
          ? "Email Is already Used"
          : "Username Is already use:",
    });
  }

  const hash = await bcrypt.hash(password,10)

  //   this code is used to create the user in out dataBase
  const user = await userModel.create({
    email,
    username,
    bio,
    profileImage,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
      username:user.username
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User Is SuccesFully Created",

    user: {
      username: user.username,
      profileImage: user.profileImage,
      email: user.email,
      bio: user.bio,
    },
  });
}

async function loginController (req, res)  {
  const { email, username, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ username: username }, { email: email }],
  });

  if (!user) {
    return res.status(404).json({
      message: "Username and passsword are InCorrect",
    });
  }

  

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "You've Entered a Wrong Password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);


  res.status(200).json({
    message: "user loggedIn Succesfully",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
};

module.exports = {
    registerController,
    loginController
}