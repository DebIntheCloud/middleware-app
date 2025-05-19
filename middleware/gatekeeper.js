function gatekeeper(req, res, next) {
  const secret = req.query.secret;

  if (secret === "123") {
    next(); // Let the request pass through
  } else {
    res.status(403).send("⛔ Access denied. Missing or incorrect secret.");
  }
}

module.exports = gatekeeper;
