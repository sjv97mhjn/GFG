

let checkAuthMiddleware = function(req,res,next){
    console.log("In Check Auth Middleware")
    // Only Two Outcomes
    // End the cycle
    // next ()
    // It can make changes to request and response object
    if(req.query.auth === 'true') {
        req.isAuthenticated = true;
        next();
    }
    else
        res.send("Not Authenticated");
}

module.exports = checkAuthMiddleware;