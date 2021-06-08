const express = require('express')
const router = express.Router()

const users = [
	{
		name: 'Mike Traher',
		email: 'michael.traher@intoolligent.com'
	},
	{
		name: 'Jon Fernandes',
		email: 'jon.fernandes@intoolligent.com'
	},
	{
		name: 'Jon Fei',
		email: 'jon.fei@intoolligent.com'
	}
]

// User routes
router.get('/users', function(req, res, next) {
	res.json(users)
})

module.exports = router
