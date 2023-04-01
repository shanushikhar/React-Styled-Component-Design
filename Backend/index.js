const express = require("express");
const app = express();
const mongoose = require("mongoose");
const env = require("dotenv");
const auth = require("./routes/auth");
const updateuser = require("./routes/user");

env.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB has been connnected"))
  .catch((err) => console.log(err));

// Routes
app.use(express.json());
app.use("/api", auth);
app.use("/update", updateuser);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on Port ${port}`);
});
