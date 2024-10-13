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

// Function to create a new inventory item in the database
const createInventory = async (inventoryData) => {
  const {
    product_slug,
    product_id,
    category_id,
    stock_quantity,
    last_restocked_date,
  } = inventoryData;

  try {
    const result = await pool.query(
      `INSERT INTO Inventory 
        (product_slug, product_id, category_id, stock_quantity, last_restocked_date) 
      VALUES 
        ($1, $2, $3, $4, $5)
      RETURNING *`,
      [
        product_slug,
        product_id,
        category_id,
        stock_quantity,
        last_restocked_date,
      ]
    );

    return result.rows[0];
  } catch (error) {
    throw new Error('Error creating inventory: ' + error.message);
  }
};

module.exports = {
  getAllInventory,
  getInventoryById,
  createInventory,
};
