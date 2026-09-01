const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

const users = [
    {
        firstname: "Thuthuka",
        lastname: "Makhosi",
        category: "Res Manager",
        identity: "resmanager",
        gender: "Male",
        location: "Room 12",
        date: "2026-09-01",
        image: ""
    }
];

app.get("/", (req, res) => {
    res.send("SHIBAM backend is running");
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {

    const newUser = req.body;

    users.push(newUser);

    res.json(newUser);
})

app.listen(3000, () => {
    console.log("SHIBAM server running on port 3000");
});