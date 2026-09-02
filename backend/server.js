const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));



app.get("/", (req, res) => {
    res.send("SHIBAM backend is running");
});

app.get("/users", (req, res) => {

    const users = db.prepare("SELECT * FROM users").all();

    res.json(users);

});

app.post("/users", (req, res) => {

     console.log("POST /users received");
    console.log("BODY:", req.body);

    const newUser = req.body;

    try {

        const insertUser = db.prepare(`
            INSERT INTO users (
                id,
                firstname,
                lastname,
                category,
                identity,
                gender,
                location,
                date,
                image
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        insertUser.run(
            newUser.id,
            newUser.firstname,
            newUser.lastname,
            newUser.category,
            newUser.identity,
            newUser.gender,
            newUser.location,
            newUser.date,
            newUser.image
        );

        res.status(201).json(newUser);

    } catch (error) {

        console.error("DATABASE ERROR:", error);

        res.status(500).json({
            error: error.message
        });

    }

});

app.put("/users/:id", (req, res) => {

    const userId = req.params.id;
    const updatedUser = req.body;
  const updateUser = db.prepare(`
        UPDATE users
        SET
            firstname = ?,
            lastname = ?,
            category = ?,
            identity = ?,
            gender = ?,
            location = ?,
            image = ?
        WHERE id = ?
    `);

    updateUser.run(
        updatedUser.firstname,
        updatedUser.lastname,
        updatedUser.category,
        updatedUser.identity,
        updatedUser.gender,
        updatedUser.location,
        updatedUser.image,
        userId
    );

});


app.listen(3000, () => {
    console.log("SHIBAM server running on port 3000");
});