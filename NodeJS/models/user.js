let mongoose  = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {type : String, required: true},
    username: {type:String, required: true},
    email: {type:String, required: true},
    password: {type: String, required: true},
    age: { type: Number, default: 0 }
});

// 4 diiferetn apis to create a record -> send a notification
// find something -> modify the date( mm/dd/yyyy)
UserSchema.pre('save', function(next){
    console.log("Pre hook executed before save operation !");
    next();
});

const User = mongoose.model("User",UserSchema); // collection name: smallcase(name) + s

module.exports = User;