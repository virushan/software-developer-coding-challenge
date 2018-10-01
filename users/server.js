const express = require('express');
const app = express();

const mongoose   = require("mongoose")

console.log(process.env.MONGO_DB_URI)
//mongoose.connect("mongodb://localhost:27017/microservices", { useCreateIndex: true, useNewUrlParser: true });
mongoose.connect(process.env.MONGO_DB_URI, { useCreateIndex: true, useNewUrlParser: true });
require('./src/models/user');
require('./src/config/passport');
app.use(require("./src/app"));

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({'errors': {
    message: err.message,
    error: {}
  }});
});
app.listen(3000, () => {
  console.log("user service running on port 3000");
});