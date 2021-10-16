const express = require("express");
const user = express.Router();

user.get("/login", (req, res) => {
    res.render("login_page.html", {title: "Login"});
});

user.post("/login", (req, res) => {
    let id = req.query.id;
    let password = req.query.password;

    res.render("user_result.html", {title: "Login", id: id, password: password, method: "post"});
});

user.get("/signup", (req, res) => {
    res.render("signup_page.html", {title: "Sign Up"});
});

user.post("/signup", (req, res) => {
    let id = req.query.id;
    let password = req.query.password;

    res.render("user_result.html", {title: "Sign Up", id: id, password: password, method: "post"});
});

module.exports = user;