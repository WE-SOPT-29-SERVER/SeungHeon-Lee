const express = require("express");
const router = express.Router()
const util = require("../lib/util");
const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");

let users = require("../dbMockup/user");

// /user/signup POST method
router.post("/signup", (req, res) => {

    // destructuring assignment
    const {email, name, password} = req.body;

    if (!email || !name || !password) {
        return res.status(400).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    const existUser = users.filter(object => object.email === email);

    if (existUser) {
        return res.status(400).send(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_EMAIL));
    }

    const newUser = {
        id: users.length + 1,
        name,
        password,
        email
    };

    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.CREATED_USER,
            newUser
        )
    );
});

// /user/login POST method
router.post("/login", async (req, res) => {
    
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    const user = users.filter(object => object.email === email)[0];

    if (!user) {
        return res.status(400).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }


    if (user.password !== password) {
        return res.status(400).send(util.fail(statusCode.BAD_REQUEST, responseMessage.MISS_MATCH_PW));
    }

    const loginUser = {
        id : user.id,
        name : user.name,
        email : user.email
    }

    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.LOGIN_SUCCESS,
            loginUser
        )
    );
});

// /user GET method
router.get("/", (req, res) => {

});

// /user/:id GET method
router.get("/:id", (req, res) => {

});

// /user/:id PUT method
router.put("/:id", (req, res) => {

});

// /user/:id DELETE method
router.delete("/:id", (req, res) => {

});

module.exports = router;