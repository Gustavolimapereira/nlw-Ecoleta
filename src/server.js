const express = require("express")
const server = express()


server.get("/", (req,res) => {
    res.send("cheguei gustavo")
})

server.listen(3000)