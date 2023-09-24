const express = require('express');
const app = express();

// import ev
require('dotenv').config({path: './config/.env'});
const port = process.env.PORT || 8080;
console.log(port);


// middleware
// const middleware = (req, res, next) => {
//     console.log('Hello from middleware...');
//     req.user = "Akashay Anand"; // manipulated or add data 
//     req.myMethod = req.method; // add property to request.
//     next();
// }
// app.use(middleware);

// Import Database
const connectDB = require('./config/database');
connectDB();

// body parser
app.use(express.json());

// importing routes
const jobs = require('./routes/jobroutes');
app.use('/api',jobs); 





app.listen(port, (err)=>{
    console.log(`server is listening on ${port}`);
});

