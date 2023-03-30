const express = require("express");
const app = express();
const mongoose = require("mongoose");
const env = require("dotenv");

env.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB has been connnected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on Port ${port}`);
});
