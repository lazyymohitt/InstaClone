const followModel =  require("../models/follow.model")


async  function followUserController(req,res){



    // This Is The LoggedIn USER
    const followerUsername =  req.user.username
    const followeeUsername =  req.params.username
     

   
    const followRecord = await followModel.create({
      follower: followerUsername,
      followee: followeeUsername,
    });

    if(followeeUsername == followerUsername){
        res.status(401).json({
            message:"Youre already following the User"
        })
    }



    res.status(201).json({
      message: `You are now following ${followeeUsername}`,
      follow: followRecord,
    })


}

module.exports = {
    followUserController
}