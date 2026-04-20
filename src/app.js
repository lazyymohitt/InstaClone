require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const connectToDB = require("./config/database");


const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser()); // ✅ FIXED POSITION

// requiring the Routes
const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");



// using the routes Here 

app.use("/api/posts", postRouter);
app.use("/api/auth", authRouter);

connectToDB();

module.exports = app;
