const express = require("express");

const userController = require("../controllers/user.controller");
const { route } = require("./auth.routes");
const identifyUser = require("../middlewares/auth.middleware");

const userRouter = express.Router();

/**
 * @route POST  /API/users/follow/:userId
 * @description follow  a User
 * @accessn private
 *
 */

userRouter.post(
  "/follow/:username",
  identifyUser,
  userController.followUserController,
);

module.exports = userRouter;
