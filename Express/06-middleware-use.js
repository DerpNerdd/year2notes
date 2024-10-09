const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const authorize = require('./middleware/authorize');

/*
req ==> middleware ==> respone
Order matters if you place the app.use after the home pathway get, then it wont run on the home page get pathway since the respone will end before the middleware has a change to run

If you have server middleware then you can call them in an arrary where again order matters 
*/
app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.use('/api', [logger, authorize]);
/*
This will apply the logger to any path that includes /api as apart of its path
This is a nice way for you to run a logger on an api to stop a certain amount of requests but still allow them on the home and documentation pages
*/
app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get("/api/items", (req, res) => {
    console.log(req.user)
    res.send('Items')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000: http://localhost:5000');
}) 