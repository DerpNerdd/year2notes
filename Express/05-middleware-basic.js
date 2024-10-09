const express = require('express')
const app = express()
const logger = require('./middleware/logger')

// request ==> middleware ==> response

app.get('/', logger, (req, res, next) => {
    res.send('Home')
})

app.listen('3000', () => {
    console.log('Server running on http://localhost:3000')
})