let mongoose  = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {type : String, required: true},
    username: {type:String, required: true},
    password: {type: String, required: true},
    age: { type: Number, default: 0 }
});

const User = mongoose.model("User",UserSchema); // collection name: smallcase(name) + s

module.exports = User;