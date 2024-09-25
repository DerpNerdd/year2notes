const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '/public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.get('/edit', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/edit.html'));
})

app.get('/javascript', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/javascript.html'));
})

app.all('*', (req, res) => {
    res.status(404).send('Page Not Found');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})