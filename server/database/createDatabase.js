const sqlite3 = require("sqlite3").verbose();

// Create new database
const db = new sqlite3.Database("challenges.db", (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Connecting to the in-memory SQLite Database");
    }
});

db.serialize(() => {
    // Create table challenge
    db.run(
        "CREATE TABLE challenge (challenge_id TEXT PRIMARY KEY NOT NULL, title VARCHAR(20), hash_tag VARCHAR(30), goal VARCHAR(30), date_created INTEGER)"
    );

    // create table for challenge_detail
    db.run(
        "CREATE TABLE challenge_detail (parent_id TEXT, tweet VARCHAR(140), date_created INTEGER, FOREIGN KEY ([parent_id]) REFERENCES 'challenge' ([challenge_id]))"
    );

    // create table for skill_list
    db.run(
        "CREATE TABLE skill_list (skill_id TEXT, skill_name VARCHAR(50) NOT NULL UNIQUE, new_skill INTEGER, progress_skill INTEGER, complete_skill INTEGER, date_created INTEGER)"
    );
});

db.close((err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Closing database connection");
    }
});
