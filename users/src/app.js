const app    = require("express").Router();
const bodyParser = require("body-parser");

const login  = require('./func/login');
const signup = require('./func/signup');

app.use(bodyParser.json());



app.post("/api/v1/user/login", login);

app.post("/api/v1/user/signup", signup);

module.exports = app;