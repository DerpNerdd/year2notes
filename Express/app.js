const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Setup Static Middleware
/* Middleware comes in the middle of the request and the response cycle of the node.js execution.
It also provides access to many functions like requst and response objects

Respone Object is passed as the second argument/parameter to the requestListener Function
The response object represents the writeable stream back to the client
--write() sends text or text streams to the client
--writeHead() sends status and respone headers to the client
--end() Signals that the servers should consider that the respone is complete
--getHeader() Returns the value of the specified header
--setTimeout() Sets the timeout value of the socket connection to the specified timeout in milliseconds
--statusCode() Returns the status code that will be sent to the client

For the writeHead and statusCode methods, the following functions are accepted:
100-199 Information Response
200-299 Suceess
300-399 Redirection
400-499 Client Error
500-599 Server Error
You can find a detailed list @ https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

The Request Object is amade by a client to a named host which is located on the server.
The aim of the request is to access resources on the server.
A proper HTTP request contains the following:
-- A request line
-- A series of HTTP headers
-- A message body (if needed)

Request Line:
Had 3 main aspects:
-- A method like GET, UPDATE, DELETE, etc tells the server who is or should be done with the resource
-- The path component identifies the resource on the server
-- The HTTP version number showing what specification to which the client has tried to make the message comply 

HTTP Headers:
HTTP Headers are writen on a message to provide the reciepent with information about the request, the sender and the way in which the sender wants to communicate with the server/recipient 
Ex. { 'Content-Type': 'text/html', 'Content-Length': 1234, 'ETag': '33a64df551} others include- host, user-agent...etc
*/