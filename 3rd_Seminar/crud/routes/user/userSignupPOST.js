const util = require("../../lib/util");
const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");
const users = require("../../dbMockup/user");

// /user/signup POST method
module.exports = async(req, res) => {
    // destructuring assignment
    const {email, name, password} = req.body;

    if (!email || !name || !password) {
        return res.status(400).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    const existUser = users.filter(object => object.email === email)[0];

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
}