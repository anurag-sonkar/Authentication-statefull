const express = require("express")
const { handleSignUpNewUser ,handleLogInUser} = require("../controllers/userControllers")
const route = express.Router()

route.post("/signup" , handleSignUpNewUser)
route.post("/login" , handleLogInUser)

module.exports = route