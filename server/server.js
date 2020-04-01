require("dotenv").config;
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const redis = require("redis");

const APP = express();

const port = process.env.PORT || 5000;

APP.use(express.json());
APP.use(bodyParser.urlencoded({ extended: false }));
APP.use(methodOverride("method"));

APP.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

APP.get('/', function (req, res, next) {
    res.render('welcome home')
})