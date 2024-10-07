const { Pool } = require('pg');
require('dotenv').config({ path: '../.env' });

const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: isProduction ? { rejectUnauthorized: false } : false, // Only use SSL in production
});

module.exports = pool;
