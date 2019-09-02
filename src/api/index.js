const serverless = require("serverless-http")

module.exports.api = serverless(require("./api"))