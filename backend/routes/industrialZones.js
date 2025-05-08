const express = require('express');
const router = express.Router();
const IndustrialZone = require('../models/IndustrialZone');

// Middleware for authentication (placeholder)
const authMiddleware = (req, res, next) => {
  // TODO: Implement JWT authentication
  next();
};

// Get all industrial zones
router.get('/', async (req, res) => {
  try {
    const zones = await IndustrialZone.find();
    res.json(zones);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single industrial zone by ID
router.get('/:id', async (req, res) => {
  try {
    const zone = await IndustrialZone.findById(req.params.id);
    if (!zone) return res.status(404).json({ message: 'Industrial Zone not found' });
    res.json(zone);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new industrial zone (admin only)
router.post('/', authMiddleware, async (req, res) => {
  const zone = new IndustrialZone({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    area: req.body.area,
    investmentData: req.body.investmentData,
    images: req.body.images
  });

  try {
    const newZone = await zone.save();
    res.status(201).json(newZone);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update industrial zone (admin only)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const zone = await IndustrialZone.findById(req.params.id);
    if (!zone) return res.status(404).json({ message: 'Industrial Zone not found' });

    if (req.body.name) zone.name = req.body.name;
    if (req.body.description) zone.description = req.body.description;
    if (req.body.location) zone.location = req.body.location;
    if (req.body.area) zone.area = req.body.area;
    if (req.body.investmentData) zone.investmentData = req.body.investmentData;
    if (req.body.images) zone.images = req.body.images;
    zone.updatedAt = Date.now();

    const updatedZone = await zone.save();
    res.json(updatedZone);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete industrial zone (admin only)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const zone = await IndustrialZone.findById(req.params.id);
    if (!zone) return res.status(404).json({ message: 'Industrial Zone not found' });

    await zone.remove();
    res.json({ message: 'Industrial Zone deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router; 