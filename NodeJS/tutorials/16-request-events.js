const http = require('http');

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.end('This is the home page')
//     }
//     // etc..
// })

// server.listen(5000, (err) =>{
//     if(err)
//         console.log(err)
//     console.log('Server is up and running on port 5000') 
// })

//Using the Event Emitter API
const server = http.createServer()
//emits request event
//subcribe to it / listen for it / respond to it
server.on("request", (req, res) => {
    if (req.url === '/'){
        console.log(req.url)
        res.end('Welcome to our home page')
    }else if(req.url === '/about'){
        console.log(req.url)
        res.end('Here is our short history')
    } else {
        res.end('404 Page not found')
    }
})

server.listen(5000, (err) =>{
    if(err)
        console.log(err)
    console.log('Server is up and running on port 5000') 
})
