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
  const query = req.query.new; // localhost:8000/user/findall?new=true
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get User Stats
router.get("/stats", authenticateAdminWithToken, async (req, res) => {
  // localhost:8000/user/stats
  const date = new Date();
  const lastyear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      {
        $match: {
          createdAt: { $gte: lastyear },
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
