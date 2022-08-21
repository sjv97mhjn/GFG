let express = require("express")
// Relative path to the current file
const checkAuthMiddleware = require("../middleWares/checkAuthMiddleware");
let router = express.Router();

// Router - Level Middleware
// router.use(checkAuthMiddleware);
// Read and Writing of Files
// /basic/add
router.all("/add",checkAuthMiddleware,(req,res)=>{
    console.log("Inside Request Handler");
    console.log(req.isAuthenticated);
    console.log("Invoked all method");
    res.send("Match all methods with the given path");
})

// /basic/home
// Get Method Route protocol://domain:port/<path>?queryParamKey=queryParamValue

// Assignment : Call all the routers matching a given path
router.get("/home",function(req,res){
    console.log("Received a request from client");
    console.log("Query Params : ",req.query);
})

router.get("/home", (req,res) => {
    res.send("Welcome to NodeJS 2");
})

// Post Method Route : Matched
router.post("/home",function(req,res){
    console.log("We triggered a post request");
    console.log("Request Body :",req.body);
    res.send("Create something / Store in something in our database");
})

router.delete("/home",function(req,res){
    res.send("Deleted Request");
})

// String, Regex
router.put("/home",function(req,res){
    res.send("Update Request");
})

// acd abcd
router.get("/ab?cd",function(req,res){
    res.send("The path here is : " + req.path);
})

// abcd abbcd  abbbcd
router.get("/ab+cd",function(req,res){
    res.send("The new regex path here is : " + req.path);
})

router.get("/route",function(req,res){
    res.send("The new regex path here is : " + req.path);
})

router.post("/understandingRequestObject/:id",(req,res)=>{
   let requestObject = {
       baseUrl: req.baseUrl,
       body : req.body,
       cookies : req.cookies,
       hostname : req.hostname,
       ip : req.ip,
       method : req.method,
       query : req.query,
       params : req.params.id,
       path : req.path
   }

   res.json(requestObject);
})

// req.param.parameterName = Sajeev
router.get("/name/:username/userDetails/:id",(req,res)=>{
        console.log(req.params.username);
        console.log(req.params.id);

        // db.find(username : req.params.id);
        res.sendStatus(200);
        // res.send(req.params.id);
        // db.find(userName = req.params.key ) ;
})

// Blogging Website :
 // Database : MongoDb / Mongoose
 // Authenticate
 // Get / Delete / Add /Update : Blogs



// Callback Function : Func that executed after some other execution gets complete
/*
 SetTimeout(callback,10000);
 */

// Multiple exports
// let obj = {
//     name : "Sajeev",
//     age : 23
// }
// module.exports = obj;

module.exports = router;