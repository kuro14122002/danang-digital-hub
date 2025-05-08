const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/dseza';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Define routes
app.get('/', (req, res) => {
  res.send('DZESA Backend API');
});

// Import and use route modules
const newsRoutes = require('./routes/news');
const documentRoutes = require('./routes/documents');
const introRoutes = require('./routes/introduction');
const industrialZonesRouter = require('./routes/industrialZones');
const investmentGuidesRouter = require('./routes/investmentGuides');
const investmentEnvRoutes = require('./routes/investmentEnvironment');
const contactsRouter = require('./routes/contacts');
const faqRoutes = require('./routes/faq');
const scheduleRoutes = require('./routes/schedule');
const mediaRoutes = require('./routes/media');
const bannerRoutes = require('./routes/banner');
const linkRoutes = require('./routes/links');
const partnerRoutes = require('./routes/partners');
const searchRoutes = require('./routes/search');
const userRoutes = require('./routes/user');

app.use('/api/news', newsRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/introduction', introRoutes);
app.use('/api/industrial-zones', industrialZonesRouter);
app.use('/api/investment-guides', investmentGuidesRouter);
app.use('/api/investment-environment', investmentEnvRoutes);
app.use('/api/contacts', contactsRouter);
app.use('/api/faq', faqRoutes);
app.use('/api/schedule', scheduleRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/banner', bannerRoutes);
app.use('/api/links', linkRoutes);
app.use('/api/partners', partnerRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/user', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 