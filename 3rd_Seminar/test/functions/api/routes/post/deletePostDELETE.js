const util = require("../../../lib/util");
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");
const posts = require("../../../dbMockup/post");

module.exports = async(req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    const post = posts.filter(obj => obj.id === Number(id))[0];

    if (!post) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_POST));
    }

    const newPosts = posts.filter(user => user.id !== Number(id));

    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.DELETE_POST,
            newPosts,
        ),
    );
};