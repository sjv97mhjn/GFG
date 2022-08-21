let express = require("express"); // express modules, importing express object
let app = express(); // creating object of this express class
let myLogger = require("./middleWares/logger");
let checkAuthMiddleware = require("./middleWares/checkAuthMiddleware")
let bodyParser = require("body-parser");
let basicRouter = require("./routes/basicRoutes")
let fileRouter = require("./routes/fileRoutes")

app.use(bodyParser.json()); // middleware attached to all routes for app instance

// Application Level MiddleWares
app.use(myLogger); // / , /anything , /*

app.use("/user",basicRouter); // /user , bound to Instance of express Router here basicRouter
app.use("/file", fileRouter);
/*
  /user/
  /tweet/:id/
 /basic/add
 */
// Multiple Handlers (Callback Functions)  as many as you want : MiddleWares functions
// app.method(path, middleWare-1 ,middleWare-2  .. , requestHandler )




app.listen(8080,function(req,res) {
    console.log("Listening on port " + 8080);
})
// (Get) http://localhost:808/home -->
// http://localhost:8080 : Socket : application is running on port 8080

// Root Directory
// app.js
// --> router/ (all are routes over here)
// --> models
// --> middlewares
//