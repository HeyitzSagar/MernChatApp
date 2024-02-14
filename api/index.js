const express = require("express");
const connectDb = require("./config/db");
const { run } = require("node:test");
const PORT = 4000;
const app = express();
const User = require("./models/UserModels.js");
const jwt = require("jsonwebtoken");
run();

const jwtSecret = process.env.JWT_SECRET;
app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const UniqueUser = await User.create(username, password);
  jwt.sign({ userId: UniqueUser._id }, jwtSecret, (err, token) => {
    if (err) {
      throw err;
    }
    res.cookie("token", token).status(201).json("ok");
  });
});

app.listen(PORT, () => {
  console.log(`App is running on the ${PORT}`);
});
