// models/productModel.js

const pool = require('../config/database');

// Function to get all products from the database
const getAllProducts = async () => {
  try {
    const result = await pool.query(
      'SELECT * FROM Products ORDER BY product_id'
    );
    return result.rows;
  } catch (error) {
    throw new Error('Error fetching products: ' + error.message);
  }
};

// Function to get a product by ID from the database
const getProductById = async (productId) => {
  try {
    const result = await pool.query(
      'SELECT * FROM Products WHERE product_id = $1',
      [productId]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error('Error fetching product by ID: ' + error.message);
  }
};

// Function to create a new product in the database
const createProduct = async (productData) => {
  const {
    product_slug,
    product_name,
    category_id,
    set_size,
    color,
    cost,
    price,
    discount_price,
    description,
  } = productData;

  try {
    const result = await pool.query(
      `INSERT INTO Products 
        (product_slug, product_name, category_id, set_size, color, cost, price, discount_price, description) 
      VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *`,
      [
        product_slug,
        product_name,
        category_id,
        set_size,
        color,
        cost,
        price,
        discount_price,
        description,
      ]
    );

    return result.rows[0];
  } catch (error) {
    throw new Error('Error creating product: ' + error.message);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};
