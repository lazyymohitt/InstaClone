const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "this username is already exist !! Try another"],
    required: true,
  },
  password: {
    type: String,
    required: true,
    select:false
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
      "https://ik.imagekit.io/mzzgm94tv/User_Posts/9c3a99f116bf2418f73da560ab81e9aa.jpg",
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
