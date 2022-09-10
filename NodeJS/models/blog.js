let mongoose  = require("mongoose");

// Getters : rootDirectory/images/<imageName>
const imageRootPath = "rootDirectory/images"
const blogSchema = new mongoose.Schema({
   title: String,
   content: String,
   author: {type: String}, // username of user creating this blog
   date: {type: Date, default: Date.now},
   subTitle: String,
   imagePath: {  //rootDirectory/images/mypic.jpg
      type: String,
      get: v => `${imageRootPath}/${v}`
   },
   comments: [{
      postedBy: String,
      body: String,
      date: {type: Date, default: Date.now}
   }],
   likes: Number,
});

module.exports = mongoose.model("Blog",blogSchema);
// new Blog ({ path: "mypic.jpg"})