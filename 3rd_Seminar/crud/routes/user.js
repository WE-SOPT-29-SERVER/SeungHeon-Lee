const express = require("express");
const router = express.Router();

const statusCode = require("./../constants/statusCode");
const responseMessage = require("./../constants/responseMessage");
const util = require("./../lib/util");
const users = require("./../dbMockup/user");

router.post("/signup", async(req, res) => {
    const {id, name, password, email} = req.body;

    if (!id || !name || !password || !email) {
        return res.status(400).send({ status: 400, message: "BAD REQURES" });
    }

    const alreadyUser = users.filter(user => user.email === email).length > 0;
    if (alreadyUser) {
        return res.status(400).send({ status: 400, message: "ALREADY EMAIL" });
    }

    const newUser = {id, name, password, email};

    users.push(newUser);

    res.status(200).send(newUser);
});

router.post("/login", async(req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
        );
    }

    const user = users.filter(user => user.email === email)[0];

    if (!user) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER),
        );
    }

    if (user.password !== password) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.MISS_MATCH_PW),
        );
    }

    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, {
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
            },
        }),
    );
});

router.get("/profile/:id", async(req, res) => {
    const { id } = req.params;

    const user = users.filter(user => user.id === Number(id))[0];
    console.log(user);

    if (!user) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER),
        );
    }

    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.READ_PROFILE_SUCCESS, {
            user: {
                name: user.name,
                email: user.email,
            },
        }),
    );
})

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { newName } = req.body;

    if (!id || !newName) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
            );
    }

    const existingUser = users.filter(user => user.id === Number(id))[0];

    if (!existingUser) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    const updatedUser = { ...existingUser, name: newName };

    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.USER_UPDATE_SUCCESS,
            updatedUser,
        ),
    );
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
            );
    }

    const existingUser = users.filter(user => user.id === Number(id))[0];

    if (!existingUser) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    const newUsers = users.filter(user => user.id !== Number(id));

    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.USER_DELETE_SUCCESS,
            newUsers,
        ),
    );
});

module.exports = router;