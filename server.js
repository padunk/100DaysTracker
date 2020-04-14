require("dotenv").config;
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const uuidv4 = require("uuid").v4;
const sqlite3 = require("sqlite3").verbose();

const { handleError, handleSuccess } = require("./utilities/handleResponse");

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
  db.all("SELECT * FROM challenge", function(err, rows) {
    res.end(JSON.stringify(rows));
  });
});

// DETAIL CHALLENGE ROUTE
APP.get("/detail/:challengeID", (req, res, next) => {
  const id = req.params.challengeID;
  const query = `
        SELECT * 
        FROM challenge_detail 
        WHERE parent_id='${id}' 
        ORDER BY rowid DESC
    `;

  db.all(query, function(err, rows) {
    if (err) {
      handleError(res, err);
    }
    if (rows.length === 0) {
      res.end(JSON.stringify([null]));
    }
    res.end(JSON.stringify(rows));
  });
});

APP.post("/detail/:challengeID", (req, res, next) => {
  const { progress: tweet } = req.body;
  const { challengeID: parent_id } = req.params;
  const data = [parent_id, tweet, +new Date()];

  const insert = `INSERT INTO challenge_detail VALUES(?, ?, ?)`;
  db.run(insert, data, function(err) {
    if (err) {
      handleError(res, err);
      return;
    }
    handleSuccess(res, 205, "Success saving to database", parent_id);
    res.end();
  });
});

// NEW ROUND ROUTE
APP.post("/add", (req, res, next) => {
  const id = uuidv4();
  let { title, hashtag, goal } = req.body;
  hashtag = hashtag.trim();
  hashtag[0] !== "#" && "#" + hashtag;
  const date = +new Date();
  const data = [id, title.trim(), hashtag, goal.trim(), date];

  const insert = `INSERT INTO challenge VALUES(?, ?, ?, ?, ?)`;
  db.run(insert, data, function(err) {
    if (err) {
      handleError(res, err);
      return;
    }
    handleSuccess(res, 301, "Success saving to database", id);
    res.end();
  });
});

// SKILLS ROUTE
APP.get("/skills", (req, res, next) => {
  db.all("SELECT * FROM skill_list", function(err, rows) {
    if (err) {
      handleError(res, err);
      return;
    }
    // res.status(204);
    res.end(JSON.stringify(rows));
  });
});

APP.post("/skills", (req, res, next) => {
  const id = uuidv4();
  const data = [id, req.body.newSkill.trim(), 1, 0, 0, +new Date()];

  const insert = `INSERT INTO skill_list VALUES(?, ?, ?, ?, ?, ?)`;
  db.run(insert, data, function(err) {
    if (err) {
      handleError(res, err);
      return;
    }
    handleSuccess(res, 205, "Success saving data with id: ", "" + id);
    res.end();
  });
});

APP.patch("/skills", (req, res, next) => {
  const { id, new_skill, progress_skill, complete_skill } = req.body;
  const data = [new_skill, progress_skill, complete_skill, id];

  const insert = `UPDATE skill_list 
    SET new_skill = ?, progress_skill = ?, complete_skill = ?
    WHERE skill_id = ?`;
  db.run(insert, data, function(err) {
    if (err) {
      handleError(res, err);
      return;
    }
    handleSuccess(res, 205, "Success updating data with id: ", id);
    res.end();
  });
});

APP.delete("/skills", (req, res, next) => {
  const { id } = req.body;
  db.run(`DELETE FROM skill_list WHERE skill_id = ?`, id, function(err) {
    if (err) {
      handleError(res, err);
      return;
    }
    handleSuccess(res, 205, "Success deleting data with id: ", id);
    res.end();
  });
});

APP.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
