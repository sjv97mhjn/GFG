let mongoose  = require("mongoose");

const blogSchema = new mongoose.Schema({
   title: String,
   content: String,
   author: {type: String},
   date: {type: Date, default: Date.now},
   subTitle: String,
   comments: [{
      postedBy: String,
      body: String,
      date: {type: Date, default: Date.now}
   }],
   likes: Number,
});

module.exports = mongoose.model("Blog",blogSchema);