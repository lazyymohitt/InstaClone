const mongoose = require("mongoose");

const followSchema = new mongoose.Schema(
  {
    follower: {
      type: String,
      required: true,
    },
    followee: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);


// this ensures that the follower is only allowed to follow thr user Once
 followSchema.index({followee:1 , follower :1},{unique :true})

const followModel = mongoose.model("follows", followSchema);

module.exports = followModel;
