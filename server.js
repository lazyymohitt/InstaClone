require("dotenv").config()
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");
const app =  require("./src/app")
const connectToDB = require("./src/config/database")


connectToDB()

app.listen(3000,()=>{
    console.log("your server has been started")
})