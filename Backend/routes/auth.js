const router = require("express").Router();
const User = require("../modals/User");
const Encrypt = require("crypto-js");
const jwt = require("jsonwebtoken");

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

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(404).json("User not found..");

    const decryptPassword = Encrypt.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const originalPassword = decryptPassword.toString(Encrypt.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(403).json("Unauthorised User!");

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { _id, password, ...othersDetails } = user._doc; // rest operator

    res.status(200).json({ ...othersDetails, token, _id }); // spread operator
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
