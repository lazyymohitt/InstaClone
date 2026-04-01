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


async function getPostController(req,res){


  const token =  req.cookies.token 
   if (!token) {
     return res.status(401).json({
       message: "UnAuthorized User",
     });
   }
  
  let decoded ;

    try {
       decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({
        message:"Token Invalid"
      })      
    }


    const userId = decoded.id

    const posts =  await postModel.find({
      user:userId
    })

    res.status(200).json({
      message:"Post Fetched Succesfully  ",
      posts
    })

}


async  function getPostDetailsController(req,res){


   const token =  res.cookies.token
   if(!token){
    return res.status(401).json({
      message:"UnAuthorized User"
    })
   }

   let decoded ;

   try {

    decoded =  jwt.verify(token,process.env.JWT_SECRET) ;
    
   } catch (err) {

    res.status(401).json({
      message:"Invalid User"
    })
    
   }

   const userId = decoded.id

   const postId = req.params.postId


  //  fetching the post here 


  const post = await postModel.findById(postId);



  if(!post){
     return res.staus(404).json({
      message:"Post Not found"
     })
  }

  

  
  }
module.exports = {
  createPostController,
  getPostController
};
