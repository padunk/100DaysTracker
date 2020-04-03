require("dotenv").config;
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const uuidv4 = require("uuid").v4;
const sqlite3 = require("sqlite3").verbose();

const APP = express();

const port = process.env.PORT || 5000;

APP.use(express.json());
APP.use(bodyParser.urlencoded({ extended: false }));
APP.use(cors());

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
        res.end(JSON.stringify(rows));
    });
    // db.close();
});

APP.get("/detail/:challengeID", (req, res, next) => {
    const id = req.params.challengeID;
    const query = `
        SELECT * 
        FROM challenge_detail 
        WHERE parent_id='${id}' 
        ORDER BY day_number ASC
    `;
    db.get(query, (err, rows) => {
        if (err) {
            console.error(err);
        }
        res.end(JSON.stringify([rows]));
    });
    // db.close();
});

APP.post("/add", (req, res, next) => {
    console.log(req.body);
    const id = uuidv4();
    const { title, hashtag, goal } = req.body;
    const date = +new Date();
    const data = [id, title, hashtag, goal, date];

    const insert = `INSERT INTO challenge VALUES(?, ?, ?, ?, ?)`;
    db.run(insert, data, err => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log("Save to database: SUCCESS");
        res.end();
    });
});

APP.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
