const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load Environment Variables
dotenv.config();

const app = express();

// ✅ CORS must be FIRST — before everything else
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "http://localhost:5173",
      "https://digi-edu.vercel.app",
    ];
    // Allow Postman / curl / server-to-server (no origin header)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Blocked by CORS: " + origin));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

// ✅ Preflight handler with SAME corsOptions (not blank cors())
app.options("*", cors(corsOptions));

// ✅ Body parsers AFTER cors
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);

// Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", time: new Date().toISOString() });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("❌ Global Error Handler:", err.stack);
  res.status(500).json({
    success: false,
    message: "An internal server error occurred.",
  });
});

// MongoDB Connection
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/edulearn";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅  MongoDB connected →", MONGO_URI);
    console.log(
      "💡  Data visible in MongoDB Compass @ mongodb://127.0.0.1:27017"
    );

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀  Server running at http://localhost:${PORT}`);
      console.log(
        `📬  Contact API ready at http://localhost:${PORT}/api/contact`
      );
    });
  })
  .catch((err) => {
    console.error("❌  MongoDB connection failed:", err.message);
    console.log("⚠️   Make sure MongoDB is running locally!");
    process.exit(1);
  });