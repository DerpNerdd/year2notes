const authorize = (req, res, next) => {
/*An example of how and API key can be used. NOT PROPER FOR REAL USE
This is just a small example for */


    const { apikey } = req.query;
    if (apikey === 'ping') {
        console.log('Authorized Access Granted')
        //This modifies the request for the next respone
        req.user = { name: 'Kachigga', id: 6969 }
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}

module.exports = authorize;