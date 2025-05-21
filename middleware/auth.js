const jwt = require("jsonwebtoken");
//Authorization header: It’s a special field in an HTTP request used to send credentials (like a token or API key) to the server
//If the request is a person knocking on a door,the Authorization header is the badge they show to prove who they are.
function auth(req, res, next) {
  const authHeader = req.headers.authorization; //This line pulls the value of the Authorization header from the incoming request.

  if (!authHeader) { //If there’s no header, send back an HTTP 401 Unauthorized response and end the request.
    return res.status(401).send("❌ No authorization header provided.");
  }

//   Example format: "Bearer mytoken123"
//   const token = authHeader.split(" ")[1]; //This splits the string "Bearer mytoken123" into: ["Bearer", "mytoken123"], and saves "mytoken123" as the token. [1] is index one

//   if (token === "mytoken123") {  //If the token matches what you're expecting (mytoken123), the user is allowed in (next() is called).
//     next(); // Token is valid → allow the request
//   } else {
//     res.status(403).send("⛔ Invalid token.");
//   }
// }

  try {
    const decoded = jwt.verify(token, "mysecretkey");
    req.user = decoded; // attach decoded info to the request if you need it later
    next();
  } catch (err) {
    res.status(403).send("⛔ Invalid or expired token.");
  }
  }

module.exports = auth;
