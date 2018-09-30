const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/api/v1/login", (req, res) => {
  res.json({ msg: "user login success!!!" });
});

app.get("/api/v1/logout", async (req, res) => {
  res.json({ msg: "user logout success!!!"});
});

app.post("/api/v1/signup", async (req, res) => {
  res.json({ msg: "user added successfully!!!"});
});

module.exports = app;