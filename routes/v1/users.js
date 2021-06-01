var express = require('express');
var router = express.Router();

const users = [
	{
		name: 'Mike Traher',
		email: 'michael.traher@intoolligent.com'
	},
	{
		name: 'Jon Fernandes',
		email: 'jon.fernandes@intoolligent.com'
	}
]

// User routes
router.get('/', function(req, res, next) {
	res.json(users);
});

module.exports = router;
