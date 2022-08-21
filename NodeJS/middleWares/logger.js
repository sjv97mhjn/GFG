let myLogger = (req,res,next) => {
    console.log("Logged");
    next();
}
let name = "Sajeev Mahajan";

module.exports = myLogger;