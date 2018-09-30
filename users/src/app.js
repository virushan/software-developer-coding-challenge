const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const login = require('./login');
const logout = require('./logout');
const signup = require('./signup');

app.use(bodyParser.json());

app.get("/api/v1/login", login);

app.get("/api/v1/logout", logout);

app.post("/api/v1/signup", signup);

module.exports = app;