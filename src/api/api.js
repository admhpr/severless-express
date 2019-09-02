const express = require("express")

const commandsRouter = require("./commands")

const app = express()

app.use('/commands', commandsRouter)

app.get("/", (req, res) => {
    res.json({"api": "ok"})
})

module.exports = app