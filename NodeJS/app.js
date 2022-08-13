let express = require("express");
let app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to Node JS");
})

app.listen(8080,function(req,res) {
    console.log("Listening on port " + 8080);
})
