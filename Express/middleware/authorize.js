const authorize = (req,res,next) => {
    // An example of how an API key can be used. NOT PROPER FOR REAL USE
    // this is just a small example for now

    const {apikey} = req.query;
    if(apikey === 'ping') {
        console.log("Authorized Access Granted")
        // This modifies the request for the next response
        req.user = {name: "Jersey Mikes", id: 123456789}
        next()
    } else {
        console.log("Authorized Access Denied")
        res.send({results:[], status: 401, message: "Access Denied"})
    }
}

mod