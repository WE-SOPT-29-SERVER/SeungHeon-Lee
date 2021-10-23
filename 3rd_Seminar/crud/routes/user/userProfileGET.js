const util = require("../../lib/util");
const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");

module.exports = async(req, res) => {
    const id = req.params.id;
    console.log(id);
}