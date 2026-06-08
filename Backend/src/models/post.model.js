const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: [true, "image_Url Is Required"],
  },
  caption: {
    type: String,
    default: "",
  },
  user: {
    ref: "users",
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "userId Is required"],
  },
});

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;
