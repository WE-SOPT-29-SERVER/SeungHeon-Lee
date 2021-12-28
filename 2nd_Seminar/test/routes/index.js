var express = require('express');
const blog = require('./api/blog');
const user = require('./api/users');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/api/blog", blog);
router.use("/api/users", user);

module.exports = router;