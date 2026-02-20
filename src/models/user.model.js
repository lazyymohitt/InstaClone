const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username already exist"],
    required: [true, "Username is  required"],
  },

  email: {
    unique: [true, "this email is already registered"],
    required: true,
    type: String,
  },
  password: {
    type: String,
    required: [true, "Please Enter a Strong Password"],
  },
  bio: String,
  profile_image: {
    type: String,
    default:
      "https://ik.imagekit.io/mzzgm94tv/istockphoto-2200526153-612x612.jpg",
  },
});

const userModel =  mongoose.model("User" , userSchema)


module.exports = userModel