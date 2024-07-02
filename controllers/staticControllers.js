const URL = require("../models/url")

async function handleHomePageRequest(req,res){
    
    res.render("home")
    

}

async function handleAnalyticsPageRequest(req,res){
    // console.log(req)
    if(!req.user) return res.redirect('/login')

    try {
        const allUsers = await URL.find({createdBy : req.user[0]._id})
        // console.log(allUsers)
        // res.json(allUsers) // temp
        res.render("analytics" , {data : allUsers})
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error")
        
    }

}

module.exports = {handleHomePageRequest,handleAnalyticsPageRequest}