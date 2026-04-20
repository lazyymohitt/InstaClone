const mongoose  = require("mongoose")



const followSchema  =  new mongoose.Schema({


    follower:{
        required:[true, "Follower is required"],
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    followee :{
        required:[true,"Followee is Required"],
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
},{
    timestamps:true
}

)


const followModel  = mongoose.model('follows', followSchema)



module.exports = followModel