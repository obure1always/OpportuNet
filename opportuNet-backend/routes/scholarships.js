const express = require('express');
const router = express.Router();
const pool = require('../db'); // Ensure this points to your PostgreSQL connection

// Get all scholarships
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM scholarships'); // Ensure this table exists in your DB
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching scholarships:', err); // Logs the full error object
    res.status(500).json({ error: 'Server Error', details: err.message });
  }
});

module.exports = router;
// Compare this snippet from opportuNet-backend/db.js: