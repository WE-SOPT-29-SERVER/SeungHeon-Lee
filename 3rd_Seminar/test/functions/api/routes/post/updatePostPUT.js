const util = require("../../../lib/util");
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");
const posts = require("../../../dbMockup/post");

module.exports = async(req, res) => {
    const { id } = req.params;
    const { newTitle, newText } = req.body;

    if (!id || !newTitle || !newText) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE))
    };

    const post = posts.filter(obj => obj.id === Number(id))[0];

    if (!post) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_POST));
    }

    const updateText = { ...post, title: newTitle, text: newText};

    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.POST_UPDATE_SUCCESS,
            updateText
        )
    )
}