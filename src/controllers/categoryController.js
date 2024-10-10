// controllers/categoryController.js

const categoryModel = require('../models/categoryModel');

// Controller function to get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryModel.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCategories,
};
