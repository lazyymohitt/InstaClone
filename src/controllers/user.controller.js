const followModel = require("../models/follow.model");

async function followUserController(req, res) {
  // This Is The LoggedIn USER
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;

  const followRecord = await followModel.create({
    follower: followerUsername,
    followee: followeeUsername,
  });
  // Now Fixing , If the User want to follow Himself

  if (followeeUsername == followerUsername) {
    return res.status(400).json({
      message: "You Cant follow YourSelf ",
    });
  }

  res.status(201).json({
    message: `You are now following ${followeeUsername}`,
    follow: followRecord,
  });
}

module.exports = {
  followUserController,
};
