const express = require('express');
const router = express.Router();
const Content = require('../models/Content');
const { authenticateToken, isAdmin } = require('../middleware/auth');

// Get all content
router.get('/', async (req, res) => {
  try {
    const content = await Content.find().sort('order');
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Admin routes for content management
router.post('/', authenticateToken, isAdmin, async (req, res) => {
  const content = new Content({
    ...req.body,
    updatedBy: req.user.id
  });

  try {
    const newContent = await content.save();
    res.status(201).json(newContent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/:id', authenticateToken, isAdmin, async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }

    Object.assign(content, {
      ...req.body,
      updatedAt: Date.now(),
      updatedBy: req.user.id
    });

    const updatedContent = await content.save();
    res.json(updatedContent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;