const express = require("express")
const { handleHomePageRequest ,handleAnalyticsPageRequest} = require("../controllers/staticControllers")
const route = express.Router()

route.get("/home" , handleHomePageRequest)
route.get("/analytics" , handleAnalyticsPageRequest)

route.get("/signup" , (req,res)=>{
    res.render("signup")

})
route.get("/login" , (req,res)=>{
    res.render("login")

})



module.exports = route