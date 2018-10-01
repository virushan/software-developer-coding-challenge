const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const add = require('./func/add');
const list = require('./func/list');
const find = require('./func/find');

app.use(bodyParser.json());

app.post("/api/v1/auction/add", add);

app.get("/api/v1/auction/list", list);

app.get("/api/v1/auction/:id", find);

module.exports = app;