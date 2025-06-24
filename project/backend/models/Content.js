const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  section: {
    type: String,
    required: true,
    enum: ['home', 'services', 'products', 'about']
  },
  type: {
    type: String,
    required: true,
    enum: ['text', 'image']
  },
  title: String,
  content: String,
  imageUrl: String,
  order: Number,
  updatedAt: {
    type: Date,
    default: Date.now
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Content', contentSchema);