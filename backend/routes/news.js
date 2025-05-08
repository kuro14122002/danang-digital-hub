const express = require('express');
const router = express.Router();
const News = require('../models/News');

// Middleware to check if user is authenticated and authorized
function isAuthenticated(req, res, next) {
  // Placeholder for authentication logic
  // In a real app, you would check for a valid JWT token
  next();
}

function isAdminOrEditor(req, res, next) {
  // Placeholder for role checking logic
  // In a real app, you would check if the user's role is 'admin' or 'editor'
  next();
}

// Get all news articles
router.get('/', async (req, res) => {
  try {
    const { category, featured, limit = 10, page = 1 } = req.query;
    const query = {};
    if (category) query.category = category;
    if (featured === 'true') query.isFeatured = true;

    const news = await News.find(query)
      .sort({ publishedDate: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .populate('author');
    const total = await News.countDocuments(query);

    res.json({
      data: news,
      total,
      pages: Math.ceil(total / limit),
      currentPage: parseInt(page),
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news', error: error.message });
  }
});

// Get a single news article by ID
router.get('/:id', async (req, res) => {
  try {
    const news = await News.findById(req.params.id).populate('author');
    if (!news) {
      return res.status(404).json({ message: 'News article not found' });
    }
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news article', error: error.message });
  }
});

// Create a new news article (Admin/Editor only)
router.post('/', isAuthenticated, isAdminOrEditor, async (req, res) => {
  try {
    const news = new News(req.body);
    const savedNews = await news.save();
    res.status(201).json(savedNews);
  } catch (error) {
    res.status(400).json({ message: 'Error creating news article', error: error.message });
  }
});

// Update a news article (Admin/Editor only)
router.put('/:id', isAuthenticated, isAdminOrEditor, async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!news) {
      return res.status(404).json({ message: 'News article not found' });
    }
    res.json(news);
  } catch (error) {
    res.status(400).json({ message: 'Error updating news article', error: error.message });
  }
});

// Delete a news article (Admin only)
router.delete('/:id', isAuthenticated, isAdminOrEditor, async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News article not found' });
    }
    res.json({ message: 'News article deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting news article', error: error.message });
  }
});

module.exports = router; 