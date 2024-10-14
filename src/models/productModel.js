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
    stock_quantity,
    last_restocked_date,
  } = productData;

  try {
    const result = await pool.query(
      `INSERT INTO Products 
        (product_slug, product_name, category_id, set_size, color, cost, price, discount_price, description, stock_quantity, last_restocked_date) 
      VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
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
        stock_quantity || 0,
        last_restocked_date || new Date(),
      ]
    );

    return result.rows[0];
  } catch (error) {
    throw new Error('Error creating product: ' + error.message);
  }
};

// Function to update a product in the database
const updateProduct = async (productId, productData) => {
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
    stock_quantity,
    last_restocked_date,
  } = productData;

  try {
    // Update product in Products table
    const result = await pool.query(
      `UPDATE Products 
      SET product_slug = $1,
          product_name = $2,
          category_id = $3,
          set_size = $4,
          color = $5,
          cost = $6,
          price = $7,
          discount_price = $8,
          description = $9,
          stock_quantity = $10,
          last_restocked_date = $11,
          updated_at = NOW()
      WHERE product_id = $12
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
        stock_quantity,
        last_restocked_date,
        productId,
      ]
    );

    return result.rows[0];
  } catch (error) {
    throw new Error('Error updating product: ' + error.message);
  }
};

// Function to delete a product by ID from the database
const deleteProduct = async (productId) => {
  try {
    // Delete the product from the Products table
    const result = await pool.query(
      'DELETE FROM Products WHERE product_id = $1 RETURNING *',
      [productId]
    );

    return result.rows[0];
  } catch (error) {
    throw new Error('Error deleting product: ' + error.message);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
