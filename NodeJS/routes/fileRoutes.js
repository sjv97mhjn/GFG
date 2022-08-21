let express = require("express")
let fs = require("fs")
let path = require("path")

let router = express.Router();


router.get("/read/:filename",(req,res)=>{
    // Get /file/read ToDo : Send to content of the file
    // C++ Api , Web Apis, Async Function
    // absolute path
    // ( __dirname , relative_path ):  /Users/sanjeev/Workspace/GFG/NodeJS/user.txt

    fs.readFile(path.resolve(__dirname,`../${req.params.filename}.txt`),'utf8', (err,data) => {
       if(err){
           console.log(err)
           res.send(err);
       } else{
           res.send(data);
       }
   });
    console.log("I am not blocked from fs. read file function ");
})


module.exports = router;