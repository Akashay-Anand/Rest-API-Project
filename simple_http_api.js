const http = require('http'); // [Note-01]
const fs = require('fs'); // [Note-02]
const data = require('./dataset.json'); //

// [note-03]
const server = http.createServer((req, res) => {
    const reqURL = req.url;
    const reqMethod = req.method;
    switch (reqMethod ) {
        case 'GET' :
            getData(req,res);
            break;
        case 'POST':
            postData(req,res);
            break;
        case 'PUT':
            putData(req,res);
            break;
        case 'DELETE':
            deleteData(req,res);
            break;
        default: {
            console.log(typeof( req.url));
            defaultHandler(res, res);
        }
    }
});

// implement get method on 
function getData(req, res) {
    const reqURL = req.url;
    const urlParts = reqURL.split('/');
    const itemId = parseInt(urlParts.pop()); // Extract the last part of the URL as the item ID

    if (!itemId) {
        // If no ID is provided, return the entire dataset
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
        return;
    }

    // Find the item in your data array based on the ID
    const item = data.find((item) => item.id === itemId);

    if (item) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(item));
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: 'Item not found' }));
    }
}

// implement post method on 
function postData(req, res) {
    let body = '';
    
    // Collect the incoming JSON data from the request body
    req.on('data', (chunk) => {
        body += chunk;
    });

    req.on('end', () => {
        try {
            // Parse the incoming JSON data
            const newData = JSON.parse(body);

            // Add the new data to your existing data array
            data.push(newData);

            // Write the updated data back to the dataset.json file
            fs.writeFile('dataset.json', JSON.stringify(data, null, 2), (err) => {
                if (err) {
                    console.error('Error writing to dataset.json:', err);
                    res.writeHead(500, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ error: 'Internal Server Error' }));
                } else {
                    res.writeHead(201, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ message: 'Data added successfully' }));
                }
            });
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: 'Invalid JSON data' }));
        }
    });
}

// implement put method on
function putData(req, res) {
    const reqURL = req.url;
    // Extract the item ID from the URL or request body (you may need to adjust this)
    const itemId = reqURL.split('/').pop(); // Extract the last part of the URL as the item ID

    // Find the item in your data array based on the ID
    const updatedItemIndex = data.findIndex((item) => item.id === parseInt(itemId));

    if (updatedItemIndex === -1) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: 'Item not found' }));
    } else {
        let body = '';
        
        // Collect the incoming JSON data from the request body
        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                // Parse the incoming JSON data
                const updatedData = JSON.parse(body);

                // Update the item in your data array
                data[updatedItemIndex] = updatedData;

                // Write the updated data back to the dataset.json file
                fs.writeFile('dataset.json', JSON.stringify(data, null, 2), (err) => {
                    if (err) {
                        console.error('Error writing to dataset.json:', err);
                        res.writeHead(500, { "Content-Type": "application/json" });
                        res.end(JSON.stringify({ error: 'Internal Server Error' }));
                    } else {
                        res.writeHead(200, { "Content-Type": "application/json" });
                        res.end(JSON.stringify({ message: 'Data updated successfully' }));
                    }
                });
            } catch (error) {
                console.error('Error parsing JSON:', error);
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: 'Invalid JSON data' }));
            }
        });
    }
}

// implement delete method on
function deleteData(req, res) {
    const reqURL = req.url;
    // Extract the item ID from the URL or request body (you may need to adjust this)
    const itemId = reqURL.split('/').pop(); // Extract the last part of the URL as the item ID

    // Find the index of the item in your data array based on the ID
    const deletedItemIndex = data.findIndex((item) => item.id === parseInt(itemId));

    if (deletedItemIndex === -1) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: 'Item not found' }));
    } else {
        // Remove the item from your data array
        data.splice(deletedItemIndex, 1);

        // Write the updated data back to the dataset.json
        fs.writeFile('dataset.json', JSON.stringify(data, null, 2), (err) => {
            if (err) {
                console.error('Error writing to dataset.json:', err);
                res.writeHead(500, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
            } else {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: 'Data deleted successfully' }));
            }
        });
    }
}

// this function will execute when the request method is not specified;
function defaultHandler(req, res) { 
    res.writeHead(200, {
        "Content-Type": "application/json",
      });
    res.write(
        JSON.stringify({
          message: `API not found at ${req.url}`,
        })
    );
    res.end();
}

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
- res.writeHead() ; and the status code is 200( denotes success);  we are just returning a string in response for client, so have used “Content-type”: 
- res.write() ; send text data to the client
- res.end() ; indicate end of the response


[Note-04]: bind this server to a port, so that server can receive requests.For this, we use a listener:

*/