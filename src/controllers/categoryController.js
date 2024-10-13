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

// Controller function to get a category by ID
const getCategoryById = async (req, res) => {
  try {
    const category = await categoryModel.getCategoryById(req.params.id);
    if (!category) {
      res.status(404).json({ error: 'Category not found' });
    } else {
      res.status(200).json(category);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to create a new category
const createCategory = async (req, res) => {
  try {
    const newCategory = await categoryModel.createCategory(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to update a category by ID
const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await categoryModel.updateCategory(
      req.params.id,
      req.body
    );
    if (!updatedCategory) {
      res.status(404).json({ error: 'Category not found' });
    } else {
      res.status(200).json(updatedCategory);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to delete a category by ID
const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await categoryModel.deleteCategory(req.params.id);
    if (!deletedCategory) {
      res.status(404).json({ error: 'Category not found' });
    } else {
      res.status(200).json({ message: 'Category deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
