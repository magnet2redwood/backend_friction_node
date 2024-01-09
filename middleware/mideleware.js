const jwt = require("jsonwebtoken");

function checkAuth(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1]; //Bearer Token
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({
      [process.env.PROJECT_NAME]: {
        status: 401,
        timestamp: Date.now(),
        message: "Invalid or Expired Token",
        error: error,
      },
    });
  }
}

module.exports = {
  checkAuth: checkAuth,
};
