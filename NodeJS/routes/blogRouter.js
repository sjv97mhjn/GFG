let express = require("express")

const User = require("../models/user");
const Blog = require("../models/blog");
let checkAuthenticationV2 = require("../middleWares/checkAuthMiddleware");
const {request, response} = require("express");

let router = express.Router();

// Middleware for authenticating the user.
router.use(checkAuthenticationV2);


// /blog/addBlog
router.post("/addBlog",async (request,response)=> {
    const newBlog = new Blog(request.body);
    await newBlog.save();
    response.send(newBlog);
})


// Delete / Modify

// Get Blogs 2 apis : Assignment
    // getBlogByUser : Username
    // getBlogById : blogId

// GetBlogByUser
// Query, Params
router.get("/getAllBlogs",(request,response)=>{

    Blog.find({username: request.session.username},(err,result)=>{
        if(err) {
            response.send(err);
        } else {
            response.send(result);
        }
    })
})


// How to get this _Id ?
router.get("/:id",(request,response)=>{

    Blog.find({_id: request.params.id},(err,result)=>{
        if(err) {
            response.send(err);
        } else {
            response.send(result);
        }

    })
})

// How to get this _Id // Update apis
router.put("/:id",(request,response)=>{

    Blog.findOneAndUpdate({_id: request.params.id},{content: request.body.content},{new: true},(err,document)=>{
            if(err) {
                response.send(err);
            } else {
                response.send(document);
            }
        });
})


// Delete api

router.delete("/:id",(request,response)=>{


    try {
        // Unhandled Exception
        const blogQuery = Blog.find({title : "My First blog"});
        blogQuery.exec();
        new Exception()

    } catch (err) {
        response.send(err);

    }

    Blog.findOneAndDelete({_id: request.params.id},{},(err,document)=>{
        if(err) {
        } else {
            response.send(document);
        }
    });
})

router.post("/understandingQueries",(request,response)=> {
    // Query Building

    const blogQuery = Blog.find({title : "My First blog"})
    .where('author').equals('sajeev_mahajan')
    .where('likes').gt(10)
    .select('content')
    .sort('-likes')
    .limit(10)
    .exec((err,result)=>{
        if(err){
            response.send(err);
        } else {
            response.send(result);
        }

    });

})

/*
   Mongoose Query
   Static helper function
    : findOneAndUpdate :
    : findOneAndDelete
    : updateMany : :

     QueryObject
     const blog = Blog.find({title : "My First blog"});
     https://mongoosejs.com/docs/queries.html


Me to Everyone (4:15 PM)
https://mongoosejs.com/docs/queries.html
Me to Everyone (4:39 PM)
https://reactjs.org/docs/create-a-new-react-app.html
Shreyash - to Everyone (4:41 PM)
doesn't refresh the page
Me to Everyone (5:00 PM)
https://witeboard.com/65dbe640-31c2-11ed-a8ce-39f44ede979d
https://witeboard.com/4838de40-284e-11ed-b5aa-7db020407a1b

 */
module.exports = router;