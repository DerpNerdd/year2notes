const express = require('express');
const app = express();
const path = require('path');
const port = 5000;

// Setup Static Middleware
/* Middleware come in the middle of the request and the response cycle of the node.js execution
It also provides access to many functions like request and reponse objects

Rsponse Object is passes as the second argument/parameter to the requestListener Function
The reposnse object represents the writeable stream back to the client
--write() Sends text or text streams to the client
--writeHead() Sends status and response headers to the client
--end() Signals that the servers shoudl consider that the response is complete
--getHeader() Returns the value of the specified header
--setTimeout() Sets the timeout value of the specified value in milliseconds
--statusCode() Returns the status code that will be send to the client


For the writeHead and statusCode methods, the following are accepted:
100-199 Information Response
200-299 Successful Response
300-399 Redirect Message
400-499 Client Error
500-599 Server Error
You can find a detailed list @https://developer.mozilla.org/en-US/docs/Web/HTTP

The Request Object is made by a client to a named host which is located on the server.
The aim of the request is to access resources online server.
A proper HTTP request contains the following:
-- A request line
-- A series of HTTP headers
-- A message body (if needed)

Request Line:
Has 3 main aspects:
-- A method like GET, UPDATE, DELETE, ... etc tells the server who is or should be done
with the resources
-- The path component identifies the reosource on the server
-- The HTTP version number showing what specificication to which the client hads tried to make the message comply

HTTP Header:
HTTP Headers are written on a message to provide the reciepient with information about
the request, the sender, and the way in which the sender want s to communicate with the server/recipient
Ex. {'content-type': 'text/html'} othes include:
--host
--user-agent
--etc

*/

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    console.log(req.url)
    res.sendFile(path.resolve(__dirname, '/public/index.html'));
});

app.post('/', (req, res) => {
    console.log(req.url)
    res.status(404).send('You know you dont post on the index, right?')
})

app.get('*', (req, res) => {
    console.log(req.url)
    res.status(404).send('404 Not Found')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})