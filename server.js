const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/errors');
require('dotenv').config({path: './config/.env'});

// uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`Error: ${err.message}`);
    console.log(`closing due to uncaught exception`);
    process.exit(1);
})

const port = process.env.PORT || 8080;
console.log(port);

// Import Database
const connectDB = require('./config/database');
connectDB();

// middleware

    // body parser
app.use(express.json());

    // importing routes
const jobs = require('./routes/jobroutes');
app.use('/api',jobs); 

    //Error middleware
app.use(errorMiddleware); 

// root address
app.get('/',(req, res) =>{
    const data = "<h1> Project is Live</h1> <h2>Doc: https://documenter.getpostman.com/view/29937505/2s9YJW5RP7</h2> <h3>[Note:] check doc for routes/endpoints <h3> ";
    res.status(200).send(data);

    res.end();
})

// listen to port

const live = app.listen(port, (err)=>{
    console.log(`server is listening on ${port} in ${process.env.NODE_ENV} mode`);
});

// handle unhandled promises rejection
process.on('unhandledRejection',err=>{
    console.log('Error: ' + err.message);
    console.log(`shutting down the server`);
    live.close(()=>{
        process.exit(1);
    })
});

console.log(HelloAan)

/*
In JavaScript, Promises are used for handling asynchronous operations. Promises have two main states: "fulfilled" (resolved) and "rejected" (failed). When a Promise is rejected, it typically means that an error occurred during the execution of an asynchronous task.

An "unhandled promise rejection" is an error that occurs in JavaScript when a Promise object is rejected (i.e., its reject handler is called to indicate failure), but there is no code to handle or catch that rejection. This can lead to unexpected behavior in your application and can make it difficult to debug issues related to asynchronous operations.

*/