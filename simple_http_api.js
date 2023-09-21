const http = require('http'); // [Note-01]
const fs = require('fs'); // [Note-02]

// [note-03]
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello API server!");
    res.end();
});

// [Note-04]
server.listen(8080,()=>{
    console.log(`server listening on 8080`);
});

/* Concepts to know.
[Note-01]:  import NodeJS http module, this allows NodeJS to transfer data over HTTP (Hyper Text Transfer Protocol).

[Node-03]: we can create the server using http createServer method. It has two parameters:
- request: this contains request Object from client ; mostly used when we have received any data ; data can be stored in request object body.
- response: this contains response Object for client ; use send data to the client.

> this properties have various method 
- res.writeHead() ; we are just returning a string in response for client, so have used “Content-type”: “text/plain”.; and the status code is 200( denotes success); 
- res.write() ; send text data to the client
- res.end() ; indicate end of the response


[Note-04]: bind this server to a port, so that server can receive requests.For this, we use a listener:

*/