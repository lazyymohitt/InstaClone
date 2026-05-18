const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");
const usermodel = require("../models/user.model");

async function followUserController(req, res) {
  // This Is The LoggedIn USER
  const followerUsername = req.user.username;

  // this is this User which we are going to Follow 
  const followeeUsername = req.params.username;

  const isUserExist = await userModel.findOne({
    username: followeeUsername,
  });

  if (!isUserExist) {
    return res.status(404).json({
      messsage: "No User Found With this Username",
    });
  }

  const isAlreadyFollowing = await followModel.findOne({
    followee: followeeUsername,
    follower: followerUsername,
  });

  if (isAlreadyFollowing) {
    return res.status(200).json({
      message: "You're already following this User",
      follow: isAlreadyFollowing,
    });
  }

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

async function unfollowUserController (req, res){

  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;


  const isUserFollowing =  await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername
  })
  

  if(!isUserFollowing){
    return res.status(200).json({
      message:`You're not following ${followerUsername}`
    })
  }


  await followModel.findByIdAndDelete(isUserFollowing._id)
   res.status(200).json({
    message:`You Have UnFollowed ${followeeUsername}`
   })
}

module.exports = {
  followUserController,
  unfollowUserController
};
