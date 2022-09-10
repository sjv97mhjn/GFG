let express = require("express"); // express modules, importing express object
let app = express(); // creating object of this express class
let bodyParser = require("body-parser");

let basicRouter = require("./routes/basicRoutes");
let fileRouter = require("./routes/fileRoutes");
let userRouter = require("./routes/userRoutes");
let blogRouter = require("./routes/blogRouter");
let mongoose = require("mongoose");

let User = require("./models/user");
let Blog = require("./models/blog");

let myLogger = require("./middleWares/logger");

app.use(bodyParser.json()); // middleware attached to all routes for app instance

app.use(myLogger);
app.use("/basic",basicRouter);
app.use("/file", fileRouter);
app.use("/user",userRouter);
app.use("/blog",blogRouter);

mongoose.connect("mongodb+srv://sajeevmahajan:sajeev97@cluster0.6ao2nvg.mongodb.net/blogwebsite?retryWrites=true&w=majority");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
})

/*
        Assignment :: Routes Specific to Blog (new Router file specific to blogs )
                         1. Add Blog
                           2. Delete Blog
                              3. Find Blog
                                4. Update Blog
 */

app.listen(8080,function(req,res) {

    console.log("Listening on port " + 8080);
})
