const express = require('express');
const dotenv = require('dotenv');
const pool = require('./config/database'); // Your database connection

dotenv.config(); // Load environment variables

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

app.get('/', async (req, res) => {
  console.log('Attempting to handle request...');

  try {
    console.log('Attempting to connect to the database...');

    // Try a simple query to check connection
    const result = await pool.query('SELECT NOW()');

    console.log('Database query successful:', result.rows[0]);

    res.send(`DB connection successful! Server time: ${result.rows[0].now}`);
  } catch (err) {
    console.error('Error connecting to the database:', err.message, err.stack);
    res.status(500).send('Failed to connect to the database');
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
