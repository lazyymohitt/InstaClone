const mongoose = require("mongoose")

async function connectToDB (){
     await mongoose.connect(process.env.MONGO_URI)

        console.log("database has been succesfully connected")
   
}


module.exports = connectToDB