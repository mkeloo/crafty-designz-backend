// models/categoryModel.js

const pool = require('../config/database');

// Function to get all categories from the database
const getAllCategories = async () => {
  try {
    const result = await pool.query(
      'SELECT * FROM Categories ORDER BY category_id'
    );
    return result.rows;
  } catch (error) {
    throw new Error('Error fetching categories: ' + error.message);
  }
};

module.exports = {
  getAllCategories,
};
