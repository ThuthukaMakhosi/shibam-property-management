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

console.log("Users table ready!");

module.exports = db;