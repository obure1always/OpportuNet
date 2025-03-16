const express = require('express');
const router = express.Router();
const pool = require('../db'); // Make sure this is correctly pointing to your PostgreSQL connection

// Get all scholarships
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM scholarships'); // Ensure this table exists in your DB
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Add a new scholarship
router.post('/', async (req, res) => {
  const { title, description, deadline } = req.body;
  try {
    const newScholarship = await pool.query(
      'INSERT INTO scholarships (title, description, deadline) VALUES ($1, $2, $3) RETURNING *',
      [title, description, deadline]
    );
    res.status(201).json(newScholarship.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
