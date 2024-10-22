const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
    res.send(process.env.MONGOURI)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})