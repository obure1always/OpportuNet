const express = require('express');
const cors = require('cors');
const pool = require('./db'); // PostgreSQL connection
const usersRoutes = require('./routes/users');
const scholarshipsRoutes = require('./routes/scholarships'); // Added scholarships route

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Allow JSON requests

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Opportunet API!');
});

app.use('/users', usersRoutes);
app.use('/scholarships', scholarshipsRoutes); // Register the scholarships route

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
