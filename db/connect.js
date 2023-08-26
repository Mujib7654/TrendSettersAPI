//import mongoose from mongoose package
const mongoose = require('mongoose');


//create a function
const connectDB = (uri) =>{
    console.log("connected")
    //return our uri using .connect method
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

module.exports = connectDB;