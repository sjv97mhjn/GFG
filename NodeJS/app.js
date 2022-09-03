let express = require("express"); // express modules, importing express object
let app = express(); // creating object of this express class
let myLogger = require("./middleWares/logger");
let checkAuthMiddleware = require("./middleWares/checkAuthMiddleware")
let bodyParser = require("body-parser");
let basicRouter = require("./routes/basicRoutes")
let fileRouter = require("./routes/fileRoutes")
let mongoose = require("mongoose");
let User = require("./models/user");
let Blog = require("./models/blog");
const {response, request} = require("express");
app.use(bodyParser.json()); // middleware attached to all routes for app instance


app.use(myLogger);
app.use("/user",basicRouter);
app.use("/file", fileRouter);

mongoose.connect("mongodb+srv://sajeevmahajan:sajeev97@cluster0.6ao2nvg.mongodb.net/blogwebsite?retryWrites=true&w=majority");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
})

app.post("/add_blog",(request,response)=> {
    const newBlog = new Blog(request.body);
    newBlog.save();
    response.send(newBlog);
})

app.post("/user", async (request,response) => {
    const user = new User({name: request.body.name, age:request.body.age}); // document of the collection defined using mongoose.model
    await user.save(); // saving that document in the collection
    response.send(user);
})

app.get("/user", async(request,response)=>{
    let users = await User.find({name: "Pavan"});
    response.send(users);
})

app.listen(8080,function(req,res) {

    console.log("Listening on port " + 8080);
})
