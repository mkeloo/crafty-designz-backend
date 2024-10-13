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

    const newProduct = result.rows[0];

    // Create corresponding inventory entry
    await pool.query(
      `INSERT INTO Inventory 
        (product_slug, product_id, category_id, stock_quantity, last_restocked_date) 
      VALUES 
        ($1, $2, $3, $4, NOW())`,
      [
        newProduct.product_slug,
        newProduct.product_id,
        newProduct.category_id,
        0, // Default stock quantity for a new product
      ]
    );

    return newProduct;
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
  } = productData;

  try {
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
          description = $9
      WHERE product_id = $10
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
        productId,
      ]
    );

    const updatedProduct = result.rows[0];

    // Update corresponding inventory entry
    await pool.query(
      `UPDATE Inventory 
      SET product_slug = $1,
          category_id = $2
      WHERE product_id = $3`,
      [
        updatedProduct.product_slug,
        updatedProduct.category_id,
        updatedProduct.product_id,
      ]
    );

    return updatedProduct;
  } catch (error) {
    throw new Error('Error updating product: ' + error.message);
  }
};

// Function to delete a product by ID from the database
const deleteProduct = async (productId) => {
  try {
    // First, delete the inventory entry for the product
    await pool.query('DELETE FROM Inventory WHERE product_id = $1', [
      productId,
    ]);

    // Then, delete the product from the Products table
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
