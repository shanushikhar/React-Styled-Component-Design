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
    res.status(401).json("You are not authenticated..");
  }
};

const authenticateToken = (req, res, next) => {
  validateUser(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      // reqq.params.id => we are passing the id in the parammeter like localhost:8000/update/64287fa71f3b14f9625bd486
      next();
    } else {
      res.status(403).json("Not allowed to do anything.."); // if id is not correct
    }
  });
};

const authenticateAdminWithToken = (req, res, next) => {
  validateUser(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Not allowed to do anything..");
    }
  });
};

module.exports = { authenticateToken, authenticateAdminWithToken };
