//entry point of the app. Imports two custom middlewares

const express = require("express");
const logger = require("./middleware/logger");
const gatekeeper = require("./middleware/gatekeeper");
const auth = require("./middleware/auth")

const jwt = require("jsonwebtoken");

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

app.use(express.json()); //  This lets Express read JSON in POST requests

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    //res.json({ token: "mytoken123" }); //When a user "logs in" successfully, the server returns a token they can use to prove who they are in future requests (like a key card to a building)
    //tokens are sent with every request to prove you’re logged in. Most frontend apps save it in localStorage, sessionStorage or cookies
    const payload = { username: "admin" }; // you can add more fields later
    const token = jwt.sign(payload, "mysecretkey", { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
