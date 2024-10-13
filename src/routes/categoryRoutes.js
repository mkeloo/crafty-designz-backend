// routes/categoryRoutes.js

const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Route to get all categories
router.get('/categories', categoryController.getAllCategories);

// Route to get a category by ID
router.get('/categories/:id', categoryController.getCategoryById);

// Route to create a new category
router.post('/categories', categoryController.createCategory);

module.exports = router;
