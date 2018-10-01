const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const bid = require('./func/bid');
const list = require('./func/list');

app.use(bodyParser.json());

app.get("/api/v1/bid", bid);

app.get("/api/v1/bid/history/:id", list);

module.exports = app;