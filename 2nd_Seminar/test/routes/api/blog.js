const express = require("express");
const blog = express.Router();

blog.get("/get", (req, res) => {
    const result = {
        status: 200,
        message: "blog get method."
    };
    res.status(200).send(result);
});

blog.post("/post", (req, res) => {
    const result = {
        status: 200,
        message: "blog post method"
    };
    res.status(200).send(result);
});

module.exports = blog; 