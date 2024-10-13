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

// Function to get a category by ID from the database
const getCategoryById = async (categoryId) => {
  try {
    const result = await pool.query(
      'SELECT * FROM Categories WHERE category_id = $1',
      [categoryId]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error('Error fetching category by ID: ' + error.message);
  }
};

// Function to create a new category in the database
const createCategory = async (categoryData) => {
  const { category_name, description } = categoryData;

  try {
    const result = await pool.query(
      `INSERT INTO Categories 
        (category_name, description) 
      VALUES 
        ($1, $2)
      RETURNING *`,
      [category_name, description]
    );

    return result.rows[0];
  } catch (error) {
    throw new Error('Error creating category: ' + error.message);
  }
};

// Function to delete a category by ID from the database
const deleteCategory = async (categoryId) => {
  try {
    const result = await pool.query(
      'DELETE FROM Categories WHERE category_id = $1 RETURNING *',
      [categoryId]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error('Error deleting category: ' + error.message);
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
};
