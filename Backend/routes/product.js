const { authenticateAdminWithToken } = require("./verifyToken");
const Product = require("../modals/Product");
const router = require("express").Router();

// Add Products
router.post("/addProduct", authenticateAdminWithToken, async (req, res) => {
  // localhost:8000/product/addProduct
  const newProducts = new Product(req.body);
  try {
    const addproduct = await newProducts.save();
    res.status(201).json(addproduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update Product
// localhost:8000/product/updateProduct/642984f70e62c7560cd8ace1
router.put(
  "/updateProduct/:id",
  authenticateAdminWithToken,
  async (req, res) => {
    try {
      const updateproduct = await Product.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(201).json(updateproduct);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
);

// Delete product
// localhost:8000/product/deleteProduct/642989ec87b9ea78d3323c5b
router.delete(
  "/deleteProduct/:id",
  authenticateAdminWithToken,
  async (req, res) => {
    try {
      const deletedproduct = await Product.findByIdAndDelete(req.params.id);
      if (deletedproduct) res.status(201).json("Product deleted..");

      res.status(404).json("Product not found..");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
);

// Get Single Product
router.get("/getproduct/:id", async (req, res) => {
  // localhost:8000/product/getproduct/64298ac63c7420b9bbde6be4
  try {
    const productdetails = await Product.findById(req.params.id);
    res.status(200).json(productdetails);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Get all products
router.get("/allProducts", async (req, res) => {
  // localhost:8000/product/allProducts
  const qnew = req.query.new; // localhost:8000/product/allProducts?new=true
  const qcategory = req.query.category; // localhost:8000/product/allProducts?category=Men

  let products;
  try {
    if (qnew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (qcategory) {
      products = await Product.find({
        categories: {
          $in: [qcategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
