const express = require('express');
const app = express();


// import ev
require('dotenv').config({path: './config/.env'});
const port = process.env.PORT || 8080;
console.log(port);

// Import Database
const connectDB = require('./config/database');
connectDB();

// middleware
// const middleware = (req, res, next) => {
//     console.log('Hello from middleware...');
//     req.user = "Akashay Anand"; // manipulated or add data 
//     req.myMethod = req.method; // add property to request.
//     next();
// }
// app.use(middleware);

// middleware
app.use(express.json());

// importing routes
const jobs = require('./routes/jobroutes');
app.use('/api',jobs); 





// app.get('/', (req, res) => {
//     res.send('Welcome');
//     res.end();
// });

app.listen(port, (err)=>{
    console.log(`server is listening on ${port}`);
});

