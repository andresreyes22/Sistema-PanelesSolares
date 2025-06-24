require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contentRoutes = require('./routes/content');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/content', contentRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});