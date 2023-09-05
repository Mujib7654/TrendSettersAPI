// routes/detailedProduct.js
const express = require('express');
const router = express.Router();

// Import your controller functions for detailed products
const { getDetailedProduct } = require('../controllers/detailedProduct');


// Define the detailed product route
router.route('/:id').get(getDetailedProduct);


module.exports = router;
