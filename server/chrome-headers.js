// chrome-headers.js
// Drop-in CORS fix for Chrome — import this in any Express app

const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://digi-edu.vercel.app",
];

const chromeHeaders = (req, res, next) => {
  const origin = req.headers.origin;

  // Set origin header
  if (!origin || ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin || "*");
  }

  // All methods Chrome might send
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS, PATCH"
  );

  // All headers Chrome sends in preflight
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Accept, X-Requested-With, Origin"
  );

  // Allow cookies / auth tokens
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Tell Chrome to cache preflight for 24 hours (reduces repeated OPTIONS calls)
  res.setHeader("Access-Control-Max-Age", "86400");

  // Chrome ALWAYS sends OPTIONS before real request — respond immediately
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
};

module.exports = chromeHeaders;