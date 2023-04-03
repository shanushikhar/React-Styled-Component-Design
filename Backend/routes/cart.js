const { authenticateToken } = require("./verifyToken");
const Cart = require("../modals/Cart");
const router = require("express").Router();

// Add to Cart
router.post("/additems", async (req, res) => {
  // localhost:8000/cart/additems
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Product
router.put("/updateCart/:id", authenticateToken, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    console.log(updatedCart);
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete product
router.delete("/deleteCart/:id", authenticateToken, async (req, res) => {
  try {
    const deletedproduct = await Cart.findByIdAndDelete(req.params.id);
    if (deletedproduct) res.status(201).json("Cart item deleted..");
    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get Single Product
router.get("/getCart/:id", async (req, res) => {
  // localhost:8000/cart/getCart/642adf254beb77f36fa9ce2e
  try {
    const productdetails = await Cart.findOne({ userId: req.params.id });
    res.status(200).json(productdetails);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Get all products
router.get("/allCartItem", async (req, res) => {
  // localhost:8000/cart/allCartItem

  try {
    const data = await Cart.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
