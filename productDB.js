require ('dotenv').config();
const connectDB = require('./db/connect');
const Product = require('./models/product');
const ProductJson = require('./product.json');
const DetailedProductJson = require('./detailedProducts.json');
const DetailedProduct = require('./models/detailedProduct');

//define start function 
const start = async() => {
    try{
        await connectDB(process.env.MONGODB_URL);
        await Product.create(ProductJson);
        await DetailedProduct.create(DetailedProductJson);
        // .create() : method used to create a new record in the database
    }
    catch(error){
        console.log("error");
    }
}


//call a function
start();