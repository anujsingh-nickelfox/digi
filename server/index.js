const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load Environment Variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS Configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Vite default
      "http://localhost:3000", // Alternative local port
      "https://digi-edu.vercel.app"
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Routes
const contactRoutes = require('./routes/contact');
app.use("/api/contact", contactRoutes);

// Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", time: new Date().toISOString() });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("❌ Global Error Handler:", err.stack);
  res.status(500).json({
    success: false,
    message: "An internal server error occurred.",
  });
});

// LOCAL MongoDB Connection — STRICTLY NOT ATLAS
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/edulearn";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅  MongoDB connected →", MONGO_URI);
    console.log("💡  Data is visible in MongoDB Compass @ mongodb://127.0.0.1:27017");
    
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀  Server running at http://localhost:${PORT}`);
      console.log(`📬  Contact API ready at http://localhost:${PORT}/api/contact`);
    });
  })
  .catch((err) => {
    console.error("❌  MongoDB connection failed:", err.message);
    console.log("⚠️  Make sure MongoDB Compass/Service is running locally!");
    process.exit(1);
  });
