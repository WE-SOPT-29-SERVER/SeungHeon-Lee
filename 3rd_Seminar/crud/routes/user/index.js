const express = require('express');
const router = express.Router();

router.post("/signup", require("./userSignupPOST"));
router.post("/login", require("./userLoginPOST"));
router.get("/:id", require("./userProfileGET"));

module.exports = router;