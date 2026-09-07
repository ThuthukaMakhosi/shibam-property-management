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

app.get("/users/count", (req, res) => {

    const result = db.prepare(
        "SELECT COUNT(*) AS count FROM users"
    ).get();

    res.json(result);
});

app.get("/requests/count", (req, res) => {
    const result = db.prepare(`
        SELECT COUNT(*) AS count
        FROM maintenance_requests
    `).get();

    res.json(result);
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

        res.status(201).json({
    message: "User created successfully"
});

    } catch (error) {

        console.error("DATABASE ERROR:", error);

        res.status(500).json({
            error: error.message
        });

    }

});

app.get("/users/:id", (req, res) => {

    const userId = req.params.id;

    const user = db.prepare(
        "SELECT * FROM users WHERE id = ?"
    ).get(userId);

    res.json(user);

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

     res.json({
        message: "User updated successfully"
    });

});

app.delete("/users/:id", (req, res) => {
    const userId = req.params.id;

    const deleteUser = db.prepare(
        "DELETE FROM users WHERE id = ?"
    );

    deleteUser.run(userId);

    res.json({
        message: "User deleted successfully"
    });
});


app.post("/requests", (req, res) => {

    console.log("POST /requests received");
    console.log("BODY:", req.body);

    const newRequest = req.body;

    try {

        const insertRequest = db.prepare(`
            INSERT INTO maintenance_requests (
                id,
                user_id,
                location,
                category,
                description,
                start_date,
                priority,
                date,
                status,
                image
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        insertRequest.run(
            newRequest.id,
            newRequest.user_id,
            newRequest.location,
            newRequest.category,
            newRequest.description,
            newRequest.start_date,
            newRequest.priority,
            newRequest.date,
            newRequest.status,
            newRequest.image
        );

        res.status(201).json({
            message: "Request created successfully"
        });

    } catch (error) {

        console.error("DATABASE ERROR:", error);

        res.status(500).json({
            error: error.message
        });
    }
});

app.get("/requests/:userId", (req, res) => {
    const userId = req.params.userId;

    try {
        const requests = db.prepare(`
            SELECT *
            FROM maintenance_requests
            WHERE user_id = ?
        `).all(userId);

        res.json(requests);

    } catch (error) {
        console.error("DATABASE ERROR:", error);
        res.status(500).json({
            error: error.message
        });
    }
});



app.delete("/requests/:id", (req, res) => {
    const requestId = req.params.id;

    try {
        const result = db.prepare(`
            DELETE FROM maintenance_requests
            WHERE id = ?
        `).run(requestId);

        if (result.changes === 0) {
            return res.status(404).json({
                error: "Request not found"
            });
        }

        res.json({
            message: "Request deleted successfully"
        });

    } catch (error) {
        console.error("DATABASE ERROR:", error);
        res.status(500).json({
            error: error.message
        });
    }
});

app.listen(3000, () => {
    console.log("SHIBAM server running on port 3000");
});