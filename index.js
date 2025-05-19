const express = require("express");
const logger = require("./middleware/logger");
const gatekeeper = require("./middleware/gatekeeper");

const app = express();
const PORT = 3000;

// Global middleware
app.use(logger);

// Protected route
app.get("/hello", gatekeeper, (req, res) => {
  res.send("👋 Hello! You passed the gate.");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
