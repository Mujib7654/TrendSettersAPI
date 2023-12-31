require('dotenv').config();
//access express module
const express =  require('express');
const cors = require('cors');



//express function
//to create application in express we need to call express function
const app = express();
app.use(cors());
// app.use(cors("http://localhost:3000"));

//get connectDB
const connectDB = require('./db/connect');

const PORT = process.env.PORT || 3000;

const product_routes = require('./routes/product');

const detailedProductRoute = require('./routes/detailedProduct');


// app.get("/", (req, res)=> {
//     res.send("Hey, I am Connected")
// });
app.get("/", (req, res)=> {
    res.redirect("/api/products")
});

app.use("/api/products" , product_routes);

app.use('/api/products', detailedProductRoute);


//here we are defining our start function
const start = async() => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () =>{
            console.log(`${PORT} Yes, I am Connected`)
        });
    } catch(error) {
        console.log(error);
    }
}

//here we called a function called start
start();
