var http = require('http');
var fs = require('fs');

/* In this example you can check the network responses to see how to data
is starting out as a large data of 3.6MB and then changes into a
chunked version of 64kb */

http
    .createServer(function(req, res){
        //This is a non streamed version to show that it takes much longer
        // if(req.url === "/"){
        //     const text = fs.readFileSync('./content/big.txt', 'utf8');
        //     res.end(text);
        // }
    
        //This is the streamed version
        const fileStream = fs.createReadStream('./content/big.txt', `utf8`);
        fileStream.on("open", () => {
            fileStream.pipe(res);
        })
        fileStream.on("error", (err) => {
            res.end(err)
        });
    })
    .listen(3000, function(){
        console.log('Server is listening on port 3000');
    })