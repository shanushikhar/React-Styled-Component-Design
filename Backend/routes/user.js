const {
  authenticateToken,
  authenticateAdminWithToken,
} = require("./verifyToken");
const Encrypt = require("jsonwebtoken");
const User = require("../modals/User");
const router = require("express").Router();

// Update
router.put("/update/:id", authenticateToken, async (req, res) => {
  // localhost:8000/user/update/64287fa71f3b14f9625bd486
  if (req.body.password) {
    req.body.password = Encrypt.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete
router.delete("/delete/:id", authenticateToken, async (req, res) => {
  // localhost:8000/user/delete/64287fa71f3b14f9625bd486
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get Single User
router.get("/find/:id", authenticateAdminWithToken, async (req, res) => {
  // localhost:8000/user/find/64287fa71f3b14f9625bd486
  try {
    const userdetails = await User.findById(req.params.id);
    const { password, ...othersDetails } = userdetails._doc; // rest operator
    res.status(200).json(othersDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Get all user
router.get("/findall", authenticateAdminWithToken, async (req, res) => {
  // localhost:8000/user/findall
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
