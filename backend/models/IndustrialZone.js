const mongoose = require('mongoose');

const industrialZoneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  area: { type: Number },
  investmentData: { type: Object },
  images: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('IndustrialZone', industrialZoneSchema); 