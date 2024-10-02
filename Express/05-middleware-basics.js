const express = require('express');
const app = express();
const logger = require('./middleware/logger');

//request ==> middleware ==> response 

app.get('/', logger, (req, res, next) => {
    res.send('Home')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000: http://localhost:5000');
})