const sqlite3 = require("sqlite3").verbose();

// Create new database
const db = new sqlite3.Database(
  "challenges.db",
  err => {
      if (err) {
          console.error(err.message);
      } else {
          console.log("Connecting to the in-memory SQLite Database");
      }
  }
);

// Create table challenge
db.serialize(() => {
  db.run(
      "CREATE TABLE challenge (challenge_id TEXT PRIMARY KEY NOT NULL,title TEXT, hash_tag TEXT, goal TEXT, date_created INTEGER)"
  );

  db.run("INSERT INTO challenge VALUES('asdf123', 'new 100daysof code', '#100DaysOfCode', 'become web developer', 1585803631442)");

  db.each("SELECT * FROM challenge", (err, row) => {
      console.log(row);
  });
});

// // create table for challenge_detail
// db.serialize(() => {
//   db.run(
//       "CREATE TABLE challenge_detail (day_number INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, parent_id TEXT, tweet TEXT, date_created INTEGER, FOREIGN KEY ([parent_id]) REFERENCES 'challenge' ([challenge_id]))"
//   );

//   db.run("INSERT INTO challenge VALUES()");

//   db.each("SELECT * FROM challenge_detail", (err, row) => {
//       console.log(row);
//   });
// });

// // create table for skill_list
// db.serialize(() => {
//   db.run(
//       "CREATE TABLE skill_list (skill_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, skill TEXT NOT NULL, done INTEGER, date_created INTEGER)"
//   );

//   db.run("INSERT INTO challenge VALUES()");

//   db.each("SELECT * FROM skill_list", (err, row) => {
//       console.log(row);
//   });
// });

db.close(err => {
  if (err) {
      console.error(err.message);
  } else {
      console.log("Closing database connection");
  }
});