//we are going to define our getAllProducts function
const Product = require('../models/product');

const getAllProducts = async(req, res) =>{
    //models.find({}): is method used to get all data from database of that model
    const myData = await Product.find(req.query);
    res.status(200).json({myData});
};

const getAllProductsTesting = async(req, res) =>{

    //req.query: req.query is mostly used for searching,sorting, filtering, pagination, e.t.c. Say for instance you want to query an API but only want to get data from page 10, this is what you'd generally use.It written as key=value
    const myData = await Product.find(req.query);
    res.status(200).json({myData});
};


module.exports = {getAllProducts, getAllProductsTesting};

