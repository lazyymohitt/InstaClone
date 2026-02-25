const express =  require('express')
const userModel = require('../models/user.model')

const authRouter =  express.Router()

authRouter.post('/register', async (req,res)=>{


    const {username, email , password , profileImage ,bio} =  req.body


    const isUserExistByUsername  =  await userModel.findOne({username})


     if(isUserExistByUsername){
        return res.status(409).json({
            message:"User Already exist with this Username"
        })
     }
     const isUserExistByEmail =  await userModel.findOne({email})

     if(isUserExistByEmail) {
        return res.status(409).json({
            message:"User Already exist with the Email"
        })
     }
})