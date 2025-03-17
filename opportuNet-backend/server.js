const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const morgan = require('morgan');
const pool = require('./db'); // PostgreSQL connection
const usersRoutes = require('./routes/users');
const scholarshipsRoutes = require('./routes/scholarships'); // Added scholarships route

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json()); // Allow JSON requests
app.use(morgan('dev')); // Logging

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Opportunet API!');
});

app.use('/users', usersRoutes);
app.use('/scholarships', scholarshipsRoutes); // Register the scholarships route

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found'
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
