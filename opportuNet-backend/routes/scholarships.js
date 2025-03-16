const express = require('express');
const router = express.Router();
const pool = require('../db'); // Ensure this points to your PostgreSQL connection

// Get all scholarships
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM scholarships'); // Ensure this table exists in your DB
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching scholarships:', err.message);
    res.status(500).send('Server Error');
  }
});

// Add a new scholarship with enhanced error logging
router.post('/', async (req, res) => {
  const { title, description, deadline } = req.body;

  if (!title || !description || !deadline) {
    console.error('Validation Error: Missing required fields');
    return res.status(400).json({ error: 'Title, description, and deadline are required' });
  }

  try {
    const newScholarship = await pool.query(
      'INSERT INTO scholarships (title, description, deadline) VALUES ($1, $2, $3) RETURNING *',
      [title, description, deadline]
    );
    res.status(201).json(newScholarship.rows[0]);
  } catch (err) {
    console.error('Database Insertion Error:', err.message);
    res.status(500).json({ error: 'Server Error: Could not add scholarship' });
  }
});

module.exports = router;
// Compare this snippet from opportuNet-backend/db.js: