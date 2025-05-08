const express = require('express');
const router = express.Router();
const Document = require('../models/Document');

// Middleware to check if user is authenticated and authorized
function isAuthenticated(req, res, next) {
  // Placeholder for authentication logic
  next();
}

function isAdminOrEditor(req, res, next) {
  // Placeholder for role checking logic
  next();
}

// Get all documents
router.get('/', async (req, res) => {
  try {
    const { category, limit = 10, page = 1 } = req.query;
    const query = {};
    if (category) query.category = category;

    const documents = await Document.find(query)
      .sort({ publishedDate: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .populate('author');
    const total = await Document.countDocuments(query);

    res.json({
      data: documents,
      total,
      pages: Math.ceil(total / limit),
      currentPage: parseInt(page),
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching documents', error: error.message });
  }
});

// Get a single document by ID
router.get('/:id', async (req, res) => {
  try {
    const document = await Document.findById(req.params.id).populate('author');
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.json(document);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching document', error: error.message });
  }
});

// Create a new document (Admin/Editor only)
router.post('/', isAuthenticated, isAdminOrEditor, async (req, res) => {
  try {
    const document = new Document(req.body);
    const savedDocument = await document.save();
    res.status(201).json(savedDocument);
  } catch (error) {
    res.status(400).json({ message: 'Error creating document', error: error.message });
  }
});

// Update a document (Admin/Editor only)
router.put('/:id', isAuthenticated, isAdminOrEditor, async (req, res) => {
  try {
    const document = await Document.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.json(document);
  } catch (error) {
    res.status(400).json({ message: 'Error updating document', error: error.message });
  }
});

// Delete a document (Admin only)
router.delete('/:id', isAuthenticated, isAdminOrEditor, async (req, res) => {
  try {
    const document = await Document.findByIdAndDelete(req.params.id);
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.json({ message: 'Document deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting document', error: error.message });
  }
});

module.exports = router; 