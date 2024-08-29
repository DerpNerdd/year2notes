const http = require('http');

const server = http.createServer((req, res) => {
    // Conditional Rendering
    if(req.url === '/' || req.url === '/home') { // '/' is home page
        res.end("Welcome to the home page!")
    } else if(req.url === '/about') {
        res.end("There is nothing to know about me")
    } else {
        res.end("404 You Suck")
    }
});

server.listen(5000)