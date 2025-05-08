const express = require('express');
const router = express.Router();
const InvestmentGuide = require('../models/InvestmentGuide');

// Middleware for authentication (placeholder)
const authMiddleware = (req, res, next) => {
  // TODO: Implement JWT authentication
  next();
};

// Get all investment guides
router.get('/', async (req, res) => {
  try {
    const guides = await InvestmentGuide.find();
    res.json(guides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single investment guide by ID
router.get('/:id', async (req, res) => {
  try {
    const guide = await InvestmentGuide.findById(req.params.id);
    if (!guide) return res.status(404).json({ message: 'Investment Guide not found' });
    res.json(guide);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new investment guide (admin only)
router.post('/', authMiddleware, async (req, res) => {
  const guide = new InvestmentGuide({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category
  });

  try {
    const newGuide = await guide.save();
    res.status(201).json(newGuide);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update investment guide (admin only)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const guide = await InvestmentGuide.findById(req.params.id);
    if (!guide) return res.status(404).json({ message: 'Investment Guide not found' });

    if (req.body.title) guide.title = req.body.title;
    if (req.body.content) guide.content = req.body.content;
    if (req.body.category) guide.category = req.body.category;
    guide.updatedAt = Date.now();

    const updatedGuide = await guide.save();
    res.json(updatedGuide);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete investment guide (admin only)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const guide = await InvestmentGuide.findById(req.params.id);
    if (!guide) return res.status(404).json({ message: 'Investment Guide not found' });

    await guide.remove();
    res.json({ message: 'Investment Guide deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router; 