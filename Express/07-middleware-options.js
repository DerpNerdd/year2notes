const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.static('./public'));

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('About')
})

app.get('/api/items', (req, res) => {
    res.send('About')
})

app.get('*', (req, res) => {
    res.send('404')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000: http://localhost:5000');
}) 