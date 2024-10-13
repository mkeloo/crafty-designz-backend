// models/inventoryModel.js

const pool = require('../config/database');

// Function to get all inventory items from the database
const getAllInventory = async () => {
  try {
    const result = await pool.query(
      'SELECT * FROM Inventory ORDER BY inventory_id'
    );
    return result.rows;
  } catch (error) {
    throw new Error('Error fetching inventory: ' + error.message);
  }
};

// Function to get an inventory item by ID from the database
const getInventoryById = async (inventoryId) => {
  try {
    const result = await pool.query(
      'SELECT * FROM Inventory WHERE inventory_id = $1',
      [inventoryId]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error('Error fetching inventory by ID: ' + error.message);
  }
};

// Function to delete an inventory item by ID from the database
const deleteInventory = async (inventoryId) => {
  try {
    const result = await pool.query(
      'DELETE FROM Inventory WHERE inventory_id = $1 RETURNING *',
      [inventoryId]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error('Error deleting inventory item: ' + error.message);
  }
};

module.exports = {
  getAllInventory,
  getInventoryById,
  deleteInventory,
};
