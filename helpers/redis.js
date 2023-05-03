require("dotenv").config()

const ioredis = require("ioredis")
const congi ={
    host:process.env.redisHost,
    port:process.env.redisPORT,
    username:"default",
    password:process.env.redisPass
}

const redis = new ioredis(congi)

module.exports={redis}