//entry point of the app. Imports two custom middlewares

const express = require("express");
const logger = require("./middleware/logger");
const gatekeeper = require("./middleware/gatekeeper");
const auth = require("./middleware/auth")

const app = express();
const PORT = 3000;

// Global middleware. Logs every request
app.use(logger);

// Protected route
app.get("/hello", gatekeeper, (req, res) => {
  res.send("👋 Hello! You passed the gate.");
});

//Protected route
app.get("/profile", auth, (req, res) => {
  res.send("🔐 Welcome to your private profile.");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
