const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    let token =
      req.header("Authorization") ||
      req.query.token ||
      req.body.token;

    if (!token) {
      return res.status(401).json({
        message: "No token, authorization denied",
      });
    }

    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    req.user = verified;

    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = authMiddleware;