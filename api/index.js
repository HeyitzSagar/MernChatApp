const express = require("express");
const connectDb = require("./config/db");
const { run } = require("node:test");
const app = express();
run();

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", (req, res) => {});
app.listen(4000, () => {
  console.log("App is running");
});
