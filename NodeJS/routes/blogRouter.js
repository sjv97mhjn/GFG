let express = require("express")

const User = require("../models/user");
const Blog = require("../models/blog");
let checkAuthenticationV2 = require("../middleWares/checkAuthMiddleware");

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

module.exports = router;