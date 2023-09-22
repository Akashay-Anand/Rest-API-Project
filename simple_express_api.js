const fs = require('fs');
const express = require('express');
const app = express();
const Data = require('./dataset.json'); // import json file

//// middleware
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// CRUD operations
app.get('/api/:id?', (req, res) => {
    const targetId = parseInt(req.params.id); // default: string ; convert to integer
    console.log(targetId); // NaN is false value
    if(!targetId) {
        res.send(Data);
        res.end();
    }
    else{
        const item = Data.find((item) => item.id === targetId);
        // console.log(item);
        // console.log(typeof(targetId));
        // console.log(Data[item.id].id);
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
    
    if((bodydata['id'] && targetId)) { 
        if(targetId &&targetId === bodydata['id']){
            const item = Data.find((item) => item.id === targetId);
            const ItemIndex = Data.findIndex((item) => item.id === parseInt(itemId));
            if(item){
                item.name = bodydata['name']?bodydata['name']:item.name;
                item.age = bodydata['age']?bodydata['age']:item.age;
                Data[ItemIndex] = item;
                fs.writeFileSync('dataset.json', JSON.stringify(Data, null, 2));
            } 
            else res.send(" id Not foundd");
        }else{
            res.send("conflict: ID can not be null/multiple ;( Tip: id shoud be same or only provided at one location. i.e: either in url or body)");
        }
    }else if((!bodydata['id'] && !targetId)){
        res.send("conflict: ID can not be null/multiple ;( Tip: id shoud be same or only provided at one location. i.e: either in url or body)");
    }
    else{
        targetId = targetId?targetId:bodydata["id"];
        const item = Data.find((item) => item.id === targetId);
        const ItemIndex = Data.findIndex((item) => item.id === parseInt(itemId));
        if(item){
            item.name = bodydata['name']?bodydata['name']:item.name;
            item.age = bodydata['age']?bodydata['age']:item.age;
            Data[ItemIndex] = item;
            fs.writeFileSync('dataset.json', JSON.stringify(Data, null, 2));
        } 
        else res.send(" id Not foundd");

    }
    console.log(bodydata['id']);
    console.log(targetId);

    res.end();
});


app.delete('/api/:id', (req, res) => {
    const targetId = req.params.id;
    const deletedItemIndex = Data.findIndex((item) => item.id === parseInt(targetId));
    if (deletedItemIndex === -1) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: 'Item not found' }));
    } else {
        Data.splice(deletedItemIndex, 1);
        fs.writeFile('dataset.json', JSON.stringify(Data, null, 2));
    }
})

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
 > reference
 - https://www.geeksforgeeks.org/express-js/
*/