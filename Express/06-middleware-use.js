const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const authorize = require('./middleware/authorize');

/*
req ==> middleware ==> response
Order matters! If you place the app.use after the home pathway get, then it won't run on the 
home get pathway since the reposnse will end before the middleware has a chance to run

If you have several middlewares, then you can call them in an arry where, again, order matters
*/

// app.use(logger)

app.get('/', (req, res) => {
    res.send('Welcome Home!')
})

app.get('/about', (req, res) => {
    res.send('About Me!')
})

app.use('/api', [logger, authorize]);
/*
This will apply the logger to any path that includes /api as a part of its path
This is a nice way for you to run a logger on an api to stop certain amount of requests
but still allow them on the home and documentation pages
*/

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send("Items")
})
app.listen('3000', () => {
    console.log('http://localhost:3000')
})