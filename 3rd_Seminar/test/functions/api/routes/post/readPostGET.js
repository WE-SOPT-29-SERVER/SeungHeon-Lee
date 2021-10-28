const posts = require("../../../dbMockup/post");
const util = require("../../../lib/util");
const statusCode = require("../../../constants/statusCode");
const responseMessage = require("../../../constants/responseMessage");

module.exports = async (req, res) => {
    const id = req.params.id

    const post = posts.filter(object => object.id === Number(id))[0];

    if (!post) {
        return res.status(400).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_POST));
    }

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_POST_SUCCESS, post));
};