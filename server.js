const express = require('express');
const app = express();

// import ev
require('dotenv').config({path: './config/.env'});
const port = process.env.PORT || 8080;
console.log(port);


// middleware

// Import Database
const connectDB = require('./config/database');
connectDB();

// body parser
app.use(express.json());

// importing routes
const jobs = require('./routes/jobroutes');
app.use('/api',jobs); 

// root address
app.get('/',(req, res) =>{
    const data = "<h1> Project is Live</h1> <h2>Doc: https://documenter.getpostman.com/view/29937505/2s9YJW5RP7</h2> <h3>[Note:] check doc for routes/endpoints <h3> ";
    res.status(200).send(data);

    res.end();
})



app.listen(port, (err)=>{
    console.log(`server is listening on ${port}`);
});

