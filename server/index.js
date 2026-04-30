const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// ✅ Step 1 — Import chrome-headers.js
const chromeHeaders = require("./chrome-headers");

// ✅ Step 2 — Use it as FIRST middleware (before everything)
app.use(chromeHeaders);

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);

// Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", time: new Date().toISOString() });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.stack);
  res.status(500).json({ success: false, message: "Internal server error." });
});

// MongoDB + Server
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/edulearn";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected →", MONGO_URI);
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
      console.log(`📬 Contact API → http://localhost:${PORT}/api/contact`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB failed:", err.message);
    process.exit(1);
  });