const util = require("../../lib/util");
const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");
const users = require("../../dbMockup/user");

// /user/login POST method
module.exports = async(req, res) => {
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
}