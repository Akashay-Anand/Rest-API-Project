const mongoose = require('mongoose');
const db_url = process.env.dbDriver;

const connectDB = () => {
    mongoose.connect(db_url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
        // useCreateIndex: true,
    })
    .then((con)=>{
        console.log(`Connected to mongodb database: ${con.connection.host}`);
    })
    .catch(err => console.log(err));
} 

module.exports = connectDB;