const mongoose =  require("mongoose")
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "this username is already exist !! Try another"],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: String,

  email: {
    type: String,
    unique: [true, "Email Is Already Exist "],
    required: true,
  },
  profileImage: {
    type: String,
    default:
      "https://ik.imagekit.io/mzzgm94tv/istockphoto-2200526153-612x612.jpg?updatedAt=1771579569808",
  },
});

const userModel = mongoose.model("users", userSchema)

module.exports =  userModel