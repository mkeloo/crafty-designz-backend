// routes/inventoryRoutes.js

const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Route to get all inventory items
router.get('/inventory', inventoryController.getAllInventory);

// Route to get an inventory item by ID
router.get('/inventory/:id', inventoryController.getInventoryById);

// Route to create a new inventory item
router.post('/inventory', inventoryController.createInventory);

module.exports = router;
