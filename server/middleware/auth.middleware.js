const jwt = require("jsonwebtoken");

const jwtSecret = "secret-cloud";

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    console.log("req.headers.authorization => ", req.headers.authorization);
    console.log("token => ", token);
    if (!token) {
      return res.status(401).json({ message: "Нет авторизации." });
    }
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    console.log("decoded => ", req.user);

    next();
  } catch (err) {
    return res.status(401).json({ message: "Нет авторизации." });
  }
};
