const express = require("express");
const user = express.Router();

user.post("/login", (req, res) => {
    const result = {
        status: 200,
        message: "user login"
    };
    res.status(200).send(result);
});

user.post("/signup", (req, res) => {
    const result = {
        status: 200,
        message: "user signup"
    };
    res.status(200).send(result);
});

module.exports = user; 