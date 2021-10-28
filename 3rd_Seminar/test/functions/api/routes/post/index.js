const express = require("express");
const router = express.Router();

router.get("/", require("./readPostsGET"));
router.get("/:id", require("./readPostGET"));
router.post("/", require("./createPostPOST"));
router.put("/:id", require("./updatePostPUT"));
router.delete("/:id", require("./deletePostDELETE"))

module.exports = router;