const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//     res.send("hello world!");
// })

app.all('/', (req, res) => {
    res.send("listening all methods");
});

app.listen(8080, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("server is listening on port 8080")
    }
})




/*
 > reference
 - https://www.geeksforgeeks.org/express-js/


*/