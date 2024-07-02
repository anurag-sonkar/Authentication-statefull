const express = require("express")
const { handleHomePageRequest ,handleAnalyticsPageRequest} = require("../controllers/userControllers")
const route = express.Router()

route.get("/home" , handleHomePageRequest)
route.get("/analytics" , handleAnalyticsPageRequest)

// route.get("/signup" , )
// route.get("/login" , )


module.exports = route