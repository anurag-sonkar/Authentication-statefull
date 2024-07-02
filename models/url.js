const mongoose = require("mongoose")

// schema
const urlSchema = mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectURL:{
        type:String,
        required:true
    },
    visitHistroy: [{timestamp :{type:Number}}],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
    }

} , {timestamps : true})

//model
const URL = mongoose.model('url' , urlSchema)

//export
module.exports = URL

