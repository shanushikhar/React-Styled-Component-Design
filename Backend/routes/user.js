const { authenticateToken } = require("./verifyToken");
const Encrypt = require("jsonwebtoken");
const user = require("../modals/User");
const router = require("express").Router();

router.put("/:id", authenticateToken, async (req, res) => {
  if (req.body.password) {
    req.body.password = Encrypt.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await user.findByIdAndUpdate(
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

module.exports = router;
