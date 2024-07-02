const USER  = require("../models/user")
const {v4 : uuidv4} = require("uuid")
const { setUser } = require("../services/auth")

async function handleSignUpNewUser(req,res){

    const {name , email , password} = req.body

    await USER.create({
        name ,
        email,
        password
    })

    return res.render("home")


}

async function handleLogInUser(req,res){
    const {email , password} = req.body

    const user = await USER.find({email,password})

    if(user.length === 0){
        return res.render("login" , {
            error : "Invalid Username or Password"
        })
    }

    const sessionId = uuidv4()
    setUser(sessionId,user)
    res.cookie("uid" , sessionId)
    return res.render("home")
}


module.exports = {handleSignUpNewUser,handleLogInUser}