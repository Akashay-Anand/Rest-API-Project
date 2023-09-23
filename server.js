require('dotenv').config({path: './config/.env'});
const express = require('express');
const app = express();

// import ev
const port = process.env.PORT || 8080;
console.log(port);

// importing routes
const jobs = require('./routes/jobroutes');
app.use('/api',jobs); // this will add api in every route even if api is not provided.? should we use this or not?

// middleware
app.use(express.json());


// app.get('/', (req, res) => {
//     res.send('Welcome');
//     res.end();
// });

app.listen(port, (err)=>{
    console.log(`server is listening on ${port}`);
});

