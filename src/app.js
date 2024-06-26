const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
