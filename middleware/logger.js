function logger(req, res, next) {
  const method = req.method;
  const url = req.url;
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp}] ${method} to ${url}`);
  next(); // pass control to the next middleware or route
}

module.exports = logger;
