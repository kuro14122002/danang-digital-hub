const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['gioi-thieu', 'tin-tuc', 'thong-bao', 'su-kien'],
    default: 'tin-tuc',
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  imageUrl: {
    type: String,
  },
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  tags: [{
    type: String,
  }],
}, {
  timestamps: true,
});

module.exports = mongoose.model('News', newsSchema); 