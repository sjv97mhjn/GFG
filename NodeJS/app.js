let express = require("express"); // express modules, importing express object
let app = express(); // creating object of this express class

let bodyParser = require("body-parser");
// Handler Functions
// Order later

app.use(bodyParser.json()); // middleware attached to all routes for app instance

let checkAuthMiddleware = function(req,res,next){
    if(req.query.auth == 'true')
     next();
    else
     res.send("Not Authenticated");
}

// Multiple Handlers (Callback Functions)  as many as you want : MiddleWares functions
// app.method(path, middleWare-1 ,middleWare-2  .. , requestHandler )

app.all("/add",checkAuthMiddleware,(req,res)=>{
    console.log("Invoked all method");
    res.send("Match all methods with the given path");
})

// Get Method Route protocol://domain:port/<path>?queryParamKey=queryParamValue
app.get("/home",function(req,res){
    console.log("Received a request from client");
    console.log("Query Params : ",req.query);
    res.send("Welcome to NodeJS");
})

// Post Method Route : Matched
app.post("/home",function(req,res){
    console.log("We triggered a post request");
    console.log("Request Body :",req.body);
    res.send("Create something / Store in something in our database");
})

app.delete("/home",function(req,res){
    res.send("Deleted Request");
})

// String, Regex
app.put("/home",function(req,res){
    res.send("Update Request");
})

// acd abcd
app.get("/ab?cd",function(req,res){
    res.send("The path here is : " + req.path);
})

// abcd abbcd  abbbcd
app.get("/ab+cd",function(req,res){
    res.send("The new regex path here is : " + req.path);
})


// Callback Function : Func that executed after some other execution gets complete
/*
 SetTimeout(callback,10000);
 */

app.listen(8080,function(req,res) {
    console.log("Listening on port " + 8080);
})
// (Get) http://localhost:808/home -->
// http://localhost:8080 : Socket : application is running on port 8080