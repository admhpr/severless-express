require('dotenv').config();
const request = require("request")

const commands = require("express").Router();

commands.get('/', (req, res) => {
    res.json({"commands": "ok"})
})

commands.post('/baptime', (req, res) => {
    const d = new Date()
    const data = {
        form: {
            token: process.env.SLACK_AUTH_TOKEN,
            channel: "#test",
            text: `baps are at ${new Date(d.setDate(d.getDate() + (12 - d.getDay()) % 7)).toLocaleString().slice(0,9)} 9:30am  :thumbsup:`
        }
    }
    request.post('https://slack.com/api/chat.postMessage', data, (error, res, body) => {
        if(error){
            throw new Error(error)
        }
    });
   res.end()
})

commands.post('/bapgetter', (req, res) => {
    const d = new Date()
    const data = {
        form: {
            token: process.env.SLACK_AUTH_TOKEN,
            channel: "#test",
            text: `:thumbsup:`
        }
    }
    request.post('https://slack.com/api/chat.postMessage', data, (error, res, body) => {
        if(error){
            throw new Error(error)
        }
    });
   res.end()
})

module.exports = commands