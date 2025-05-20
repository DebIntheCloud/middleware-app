//This function logs every incoming request to your server in a human-readable format.

function logger(req, res, next) {
    //- `req`: the request from the client
    //- `res`: the response you’ll send back
    //- `next`: a function that says “I’m done, move to the next step”
  const method = req.method; //It reads the HTTP method of the incoming request and saves it in a variable called method.
  const url = req.url; // Saves the route being requested
  const timestamp = new Date().toISOString(); //Saves the current date & time in ISO format.

  console.log(`[${timestamp}] ${method} to ${url}`);
  next(); // pass control to the next middleware or route
}

module.exports = logger;
