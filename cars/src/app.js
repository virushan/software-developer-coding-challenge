const express    = require("express");
const app        = express();
const bodyParser = require("body-parser");

const add    = require('./func/add');
const makes  = require('./func/makes');
const models = require('./func/models');

app.use(bodyParser.json());

app.post("/api/v1/add", add);

app.get("/api/v1/makes", makes);

app.get("/api/v1/models/:make", models);

module.exports = app;