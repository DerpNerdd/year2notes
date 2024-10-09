const express = require('express');
const app = express();

const {products} = require('./db/data')

app.get('/', (req, res) => {
    res.json(products);
}).listen(5000, () => {'listening on http://localhost:5000'})
// This is a basic example of an API
// API stands for Application Program Interface