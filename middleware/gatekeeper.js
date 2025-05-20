// blosks users who don't provide ?secret=123
function gatekeeper(req, res, next) {
  const secret = req.query.secret; //It creates a new var named secret and stores it in the value of req.query.secret
// "Look at the request's query parameters, find the one called secret, and save its value in a variable named secret so I can use it later.
  if (secret === "123") {
    next(); // Let the request pass through
  } else {
    res.status(403).send("⛔ Access denied. Missing or incorrect secret.");
  }
}

module.exports = gatekeeper;
