// server.js

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Import the cors package
const pool = require('./config/database'); // Your database connection
const categoryRoutes = require('./routes/categoryRoutes'); // Import the category routes

dotenv.config(); // Load environment variables

const app = express();

// Enable CORS for all origins or specify the frontend origin
app.use(
  cors({
    origin: 'http://localhost:3000', // Allow requests from your frontend origin
  })
);

// Middleware to parse incoming JSON requests
app.use(express.json());

// Test route to check database connection
app.get('/', async (req, res) => {
  console.log('Attempting to handle request...');

  try {
    console.log('Attempting to connect to the database...');

    // Try a simple query to check connection
    const result = await pool.query('SELECT NOW()');

    console.log('Database query successful:', result.rows[0]);

    res.json({
      message: 'DB connection successful!',
      serverTime: result.rows[0].now,
    });
  } catch (err) {
    console.error('Error connecting to the database:', err.message, err.stack);
    res.status(500).json({ error: 'Failed to connect to the database' });
  }
});

// Use the category routes
app.use('/api', categoryRoutes);

// Add a health check endpoint for /api
app.get('/api', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
