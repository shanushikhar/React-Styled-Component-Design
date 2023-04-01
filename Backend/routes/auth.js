const router = require("express").Router();
const User = require("../modals/User");
var Encrypt = require("crypto-js");

router.post("/test", (req, res) => {
  const username = req.body.username;
  res.send("username is " + username);
});

// Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: Encrypt.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  console.log(newUser);

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
