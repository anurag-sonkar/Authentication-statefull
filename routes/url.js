const express = require("express")
const route = express.Router()
const {handleGenerateNewShortUrl , handleGetUrlRequest} = require("../controllers/urlControllers")

route.post("/",handleGenerateNewShortUrl)

route.get("/:shortId" , handleGetUrlRequest)


module.exports = route
