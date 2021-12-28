const express = require("express");
const blog = express.Router();

blog.get("/post", (req, res) => {
    res.render("posting_page.html", {title: "글 쓰기"});
});

blog.post("/post", (req, res) => {
    let text = req.query.text;
    let content = req.query.content;

    res.render("post_result.html", {title: "글 쓰기", text: text, content: content});
});

module.exports = blog;