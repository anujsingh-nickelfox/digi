require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contact');

const app = express();

// Middleware
app.use(cors({ 
  origin: 'http://localhost:3000', // React default port
  credentials: true 
}));
app.use(express.json());

// Routes
app.use('/api', contactRoutes);

// Health check
app.get('/health', (req, res) => res.send('Server is healthy!'));

// MongoDB Connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('MONGO_URI is missing in .env file');
  process.exit(1);
}

// Purana mongoose.connect wala poora hissa hata kar ye paste karein
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000
})
.then(() => {
  console.log('✅ Connected to MongoDB Atlas');
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch(err => {
  console.error('❌ MongoDB Connection Error:', err.message);
  process.exit(1);
});
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 10000 // 10 seconds tak wait karega connect hone ke liye
})
