const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("https://x.com/Rajan_rana_");
});
app.get("/login", (req, res) => {
  res.send("<h1>please login</h1>");
});
app.get("/webdev", (req, res) => {
  res.send("<h2>rajan web dev</h2>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
