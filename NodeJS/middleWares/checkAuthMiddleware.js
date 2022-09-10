
let checkAuthenticationV2 = (request,response,next) => {
    if(request.session!=null && request.session.username!= null){
        next();
    } else {
        response.send("Not Authenticated");
    }
}

module.exports = checkAuthenticationV2;