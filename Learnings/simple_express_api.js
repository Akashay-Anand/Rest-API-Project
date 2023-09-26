const fs = require('fs');
const express = require('express');
const app = express();
const Data = require('./dataset.json'); // import json file

//// middleware
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// CRUD operations
////////////////////////////////
app.get('/api/:id?', (req, res) => {
    const targetId = parseInt(req.params.id); // default: string ; convert to integer
    console.log(targetId); // NaN is false value
    if(!targetId) {
        res.send(Data);
        res.end();
    }
    else{
        const item = Data.find((item) => item.id === targetId);
        if(item) res.send(item); // undefined == false
        else res.send(" id Not foundd");
    } 
    res.end();
});

app.post('/api', (req, res) => {
    const bodydata = req.body; // use middleware to correct it.
    if(bodydata.id && bodydata.name && bodydata.age){
        Data.push(bodydata);
        fs.writeFileSync('dataset.json', JSON.stringify(Data, null, 2));
        res.send(Data);
    }else{
        res.send('provide some valid input');
    }
    res.end();
});

app.put('/api/:id', (req, res) => {
    const targetId = parseInt(req.params.id); // default: string ; convert to integer
    const bodydata = req.body;
    if(bodydata.id){
        if(targetId != bodydata.id){
            res.send('provide some valid input; (Tip: id shoud be same or only provided at one location. i.e: either in url or body)');
            res.end();
        }
    }
    const item = Data.find((item) => item.id === targetId);
    const ItemIndex = Data.findIndex((item) => item.id === parseInt(targetId));
    if(item){
        item.name = bodydata['name']?bodydata['name']:item.name;
        item.age = bodydata['age']?bodydata['age']:item.age;
        Data[ItemIndex] = item;
        fs.writeFileSync('dataset.json', JSON.stringify(Data, null, 2));
        res.send(Data);
    } 
    else res.send(" id Not foundd");
    // console.log(targetId);

    res.end();
});

app.delete('/api/:id', (req, res) => {
    const targetId = req.params.id;
    const deletedItemIndex = Data.findIndex((item) => item.id === parseInt(targetId));
    console.log(deletedItemIndex);
    if (deletedItemIndex === -1) {
        res.writeHead(404, { "Content-Type": "application/json" });
        // res.send("Not Found"); //[Note - 01] error ; after using writeHead we should not use send
        res.end(JSON.stringify({ error: 'Item not found' }));
    } else {
        Data.splice(deletedItemIndex, 1);
        fs.writeFileSync('dataset.json', JSON.stringify(Data, null, 2));
        res.send(`success: data with id-${targetId} is deleted`);
    }
    res.end();
})
////////////////////////////////

// this will execute if above routes will not get trigerred
app.all('/api/:id?', (req, res) => {
    res.status(200);
    res.send("Api might not be available or you are invoking wrong url");
    res.end();
});

/// listen 
app.listen(8080, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("server is listening on port 8080")
    }
})


// Routing methods

/*
> Middleware: a piece of code that gets executed between the request-response cycles;
> - The 'app.use()' is the syntax to use any middleware.
> - express.json() middleware is used to parses the incoming request object as a JSON object.
> - express.urlencoded() middleware to parse the form data. The { extended: true } option allows for parsing rich objects and arrays.
*/

/*
[Note-01]: 
- If you use res.writeHead(), you are manually setting the response headers, so you should not use res.send(), res.json(), or similar high-level methods provided by your web framework. Instead, use res.end() to send the response body separately.

- If you use res.send(), res.json(), or similar methods provided by your web framework, these methods will handle setting the appropriate headers for you. In this case, you should not use res.writeHead() to set headers separately because it can lead to conflicts and errors.

- 

*/

/*
 > reference
 - https://www.geeksforgeeks.org/express-js/
*/