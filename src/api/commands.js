require("dotenv").config();
const request = require("request");

const commands = require("express").Router();

commands.get("/", (req, res) => {
  res.json({ commands: "ok" });
});

commands.post("/hello", (req, res) => {
  const d = new Date();
  const data = {
    form: {
      token: process.env.SLACK_AUTH_TOKEN,
      channel: "#test",
      text: `hello world`
    }
  };
  request.post(
    "https://slack.com/api/chat.postMessage",
    data,
    (error, res, body) => {
      if (error) {
        throw new Error(error);
      }
    }
  );
  res.end();
});

module.exports = commands;
