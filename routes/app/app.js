var express = require('express');
var router = express.Router();

const message = {
	title: 'The message',
	status: 'ok',
	clear: true
}

// Home page
router.get('/', function(req, res, next) {
	res.json(message)
});

module.exports = router;
