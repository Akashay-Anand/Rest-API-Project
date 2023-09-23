require('dotenv').config({path: './config/.env'});
const express = require('express');
const app = express();

// import ev
const port = process.env.PORT || 8080;
console.log(port);

// importing routes
const jobs = require('./routes/jobroutes');

// middleware
app.use(express.json());

app.use(jobs);

app.get('/', (req, res) => {
    res.send('Welcome');
    res.end();
});

app.listen(port, (err)=>{
    console.log(`server is listening on ${port}`);
});

