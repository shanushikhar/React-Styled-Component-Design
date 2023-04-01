const jwt = require("jsonwebtoken");

const validateUser = (req, res, next) => {
  const tokenheader = req.headers.token;

  if (tokenheader) {
    const token = tokenheader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Invalid Token");

      req.user = user;
      next();
    });
  } else {
    res.status(401).status("You are not authenticated..");
  }
};

const authenticateToken = (req, res, next) => {
  validateUser(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      // reqq.params.id => we are passing the id in the parammeter like
      next();
    } else {
      res.status(403).json("Not allowed to do anything..");
    }
  });
};

module.exports = { authenticateToken };
