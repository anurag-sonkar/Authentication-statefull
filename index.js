const express = require("express")
const app = express()
const path = require("path")
const cookieParser = require("cookie-parser")
const connectMongoDb = require("./connection")
const {restrictToLoggnedinUserOnly , checkAuth} = require("./middlewares/auth")
const urlRoute = require("./routes/url")
const staticRoutes = require("./routes/staticRoutes")
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
app.use(cookieParser())

// routing
app.use("/url" , restrictToLoggnedinUserOnly , urlRoute ) // inline middleware
app.use("/user" , userRoute)
app.use("/" ,checkAuth ,  staticRoutes)





app.listen(8000 , ()=>console.log("Server is running at PORT :",8000))