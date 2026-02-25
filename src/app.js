require("dotenv").config()
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");
const express = require ('express')
const connectToDB = require('./config/database')

const app = express()

app.use(express.json())

connectToDB()
module.exports = app