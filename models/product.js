//mongo instance
// const mongoose = require('mongoose');

//need to define our schema means structure of our tables or document
// const productSchema = new mongoose.Schema(
//     {
//         name: {
//             type : String,
//             required: true
//         },

//         price: {
//             type: Number ,
//             required: [true, "price must be provided"]
//         },

//         featured: {
//             type: Boolean,
//             default: false
//         },

//         rating: {
//             type: Number,
//             default: 4.9 
//         },

//         createdAt: {
//             type: Date,
//             default: Date.now()
//         },

//         company: {
//             type: String,
//             //An ENUM is a string object with a value chosen from a list of permitted values that are enumerated explicitly in the column specification at table creation time.
//             enum : {
//                 values: ["apple", "samsung", "dell", "mi"],
//                 message: `{VALUES} is not supported`
//             },
//         },
//     }
// );

//Now we have to add our schema into a collection means we have tio create a table(collection), we have already defined our rows and column of table/collection. we just need to create a name of our table.
// module.exports = mongoose.model("Product" , productSchema);


//colection name must be in singular for and 1st letter must be in capital
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {

        id: { type: String, required: true },
        name: { type: String, required: true },
        company: { type: String, required: true },
        price: { type: Number, required: true },
        colors: [{ type: String }],
        image: { type: String },
        description: { type: String },
        category: { type: String, required: true },
        shipping: { type: Boolean },
        featured: { type: Boolean }
    }
);

module.exports = mongoose.model('Product', productSchema);

