require("dotenv").config;
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const sqlite3 = require("sqlite3").verbose();

const APP = express();

const port = process.env.PORT || 5000;

APP.use(express.json());
APP.use(bodyParser.urlencoded({ extended: false }));
APP.use(cors());
APP.use(methodOverride("method"));

const db = new sqlite3.Database(
    "./database/challenges.db",
    sqlite3.OPEN_READWRITE,
    err => {
        if (err) {
            console.error(err.message);
        } else {
            console.log("Connecting to the in-memory SQLite Database");
        }
    }
);

APP.get("/", (req, res, next) => {
    db.all("SELECT * FROM challenge", (err, rows) => {
        console.log(rows);
        res.end(JSON.stringify(rows));
    });
});

APP.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
