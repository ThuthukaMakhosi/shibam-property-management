const Database = require("better-sqlite3");

const db = new Database("shibam.db");

console.log("Database connected!");

db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        firstname TEXT NOT NULL,
        lastname TEXT NOT NULL,
        category TEXT NOT NULL,
        identity TEXT NOT NULL,
        gender TEXT NOT NULL,
        location TEXT NOT NULL,
        date TEXT NOT NULL,
        image TEXT
    )
`).run();


db.prepare(`
   CREATE TABLE IF NOT EXISTS maintenance_requests (

        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        location TEXT NOT NULL,
        category TEXT NOT NULL,
        description TEXT NOT NULL,
        start_date TEXT NOT NULL,
        priority TEXT NOT NULL,
        date TEXT NOT NULL,
        status TEXT NOT NULL,
        image TEXT,

        FOREIGN KEY (user_id) REFERENCES users(id)
    )
`).run();


console.log("Users table ready!");

module.exports = db;