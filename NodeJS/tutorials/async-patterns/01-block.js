/* The point of this example is that it will take a long time to run the loop in the middle called blocking code
If you have 3 tabs open to the home page everything will load fine but change one page to /about and then
event the homepages will take time to load since the about page is loading, thus "BLOCKING" the entire server
*/

const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to the home page!')
    }
    else if(req.url === '/about'){
        //Blocking code
        for(let i = 0; i < 1000; i++){
            for(let j = 0; j < 1000; j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('About page')
    }
    else {
        res.end('404 Not Found')
    }
});

server.listen(5000, () => {
    console.log('Server is running on port 5000')
});