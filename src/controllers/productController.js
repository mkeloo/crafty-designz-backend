// controllers/productController.js

const productModel = require('../models/productModel');

// Controller function to get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to get a product by ID
const getProductById = async (req, res) => {
  try {
    const product = await productModel.getProductById(req.params.id);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to create a new product
const createProduct = async (req, res) => {
  try {
    const newProduct = await productModel.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await productModel.deleteProduct(req.params.id);
    if (!deletedProduct) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.status(200).json({ message: 'Product deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
};
