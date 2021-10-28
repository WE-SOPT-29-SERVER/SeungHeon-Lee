const util = require("../../lib/util");
const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");
const users = require("../../dbMockup/user");

module.exports = async(req, res) => {
    const id = req.params.id;
    
    const user = users.filter(object => object.id === Number(id))[0];

    if (!user) {
        return res.status(400).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    const userInfo = {
        id : user.id,
        name : user.name,
        email : user.email
    }

    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.READ_PROFILE_SUCCESS,
            userInfo
        )
    );
}