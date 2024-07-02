const express = require("express")
const app = express()
const path = require("path")

const connectMongoDb = require("./connection")

const urlRoute = require("./routes/url")
const userRoute = require("./routes/user")

//connect Database
connectMongoDb("mongodb://127.0.0.1:27017/practise-url")
.then(()=>{
    console.log("MongoDb is connected as Database")
})
.catch((error)=>{
    console.log(error.message)

})

// template engine
app.set("view engine" , "ejs") // view engine use krna h , konsa krna h 
app.set("views" , path.resolve("./views")) // folder name , path (need to import)

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// routing
app.use("/url" , urlRoute )
app.use("/" , userRoute)





app.listen(8000 , ()=>console.log("Server is running at PORT :",8000))