const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('User Hit Resource')
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.get('*', (req, res) => {
    res.status(404).send('Page Not Found')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})