// controllers/inventoryController.js

const inventoryModel = require('../models/inventoryModel');

// Controller function to get all inventory items
const getAllInventory = async (req, res) => {
  try {
    const inventory = await inventoryModel.getAllInventory();
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to get an inventory item by ID
const getInventoryById = async (req, res) => {
  try {
    const inventory = await inventoryModel.getInventoryById(req.params.id);
    if (!inventory) {
      res.status(404).json({ error: 'Inventory item not found' });
    } else {
      res.status(200).json(inventory);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to create a new inventory item
const createInventory = async (req, res) => {
  try {
    const newInventory = await inventoryModel.createInventory(req.body);
    res.status(201).json(newInventory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to delete an inventory item by ID
const deleteInventory = async (req, res) => {
  try {
    const deletedInventory = await inventoryModel.deleteInventory(
      req.params.id
    );
    if (!deletedInventory) {
      res.status(404).json({ error: 'Inventory item not found' });
    } else {
      res.status(200).json({ message: 'Inventory item deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllInventory,
  getInventoryById,
  createInventory,
  deleteInventory,
};
