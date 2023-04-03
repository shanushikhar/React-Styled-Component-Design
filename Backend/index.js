const express = require("express");
const app = express();
const mongoose = require("mongoose");
const env = require("dotenv");
const auth = require("./routes/auth");
const user = require("./routes/user");
const product = require("./routes/product");
const cart = require("./routes/cart");
const order = require("./routes/order");

env.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB has been connnected"))
  .catch((err) => console.log(err));

// Routes
app.use(express.json());
app.use("/api", auth);
app.use("/user", user);
app.use("/product", product);
app.use("/cart", cart);
app.use("/order", order);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on Port ${port}`);
});
