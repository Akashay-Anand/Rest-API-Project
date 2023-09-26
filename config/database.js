const mongoose = require('mongoose');
const db_url = process.env.dbDriver;

const connectDB = () => {
    mongoose.connect(db_url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((con)=>{
        console.log('Mongoose Database Connection: Success');
    })
    .catch(err => console.log(err));
} 

module.exports = connectDB;