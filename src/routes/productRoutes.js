// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route to get all products
router.get('/products', productController.getAllProducts);

// Route to get a product by ID
router.get('/products/:id', productController.getProductById);

// Route to create a new product
router.post('/products', productController.createProduct);

// Route to update a product by ID
router.put('/products/:id', productController.updateProduct);

// Route to delete a product by ID
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
