const short = require('short-uuid');
const URL = require("../models/url")


async function handleGenerateNewShortUrl(req,res){
    const body = req.body
    // console.log(req)

    // check
    if (!body.url) {  // name="url" inside form
        return res.status(400).json({ error: "URL is required" });
    }
    
    // genearte short-id
    const uid = short.generate().slice(0,6)

    // create new docs
    try {
        const response = await URL.create({
            shortId:uid,
            redirectURL:body.url,
            visitHistroy:[],  // initial not visited hence empty
            createdBy:req.user[0]._id

        })

        // after create what to do  ------ pending ✅done - now redirect to home
        // res.status(201).send({"success" : uid})
        // console.log("RESPONE" , response)
        res.render("home")
        
    } catch (error) {
        res.status(400).send({"message" : error.message})
    }


}

async function handleGetUrlRequest(req,res){
    const shortId = req.params.shortId
    try {
        const entry = await URL.findOneAndUpdate({shortId} , {$push:{visitHistroy:{timestamp : Date.now()}}})
        if (entry) {
            res.redirect(entry.redirectURL);
        } else {
            res.status(404).send({ "message": "URL not found" });
        }

    } catch (error) {
        res.status(400).send({"message" : error.message})
        
    }
}


module.exports = {handleGenerateNewShortUrl , handleGetUrlRequest}