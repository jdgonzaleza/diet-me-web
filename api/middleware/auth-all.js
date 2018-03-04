const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    console.log(req.headers.token);
    const decoded = jwt.verify(req.headers.token, "elgranvaron");
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Auth failed"
    });
  }
};