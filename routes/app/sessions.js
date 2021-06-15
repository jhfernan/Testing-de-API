const router = require('express').Router()
const jwt = require('jsonwebtoken')

const auth = require('../../middleware/auth')
const config = require('../../config')
const util = require('../../middleware/utilities')

const users = [
	{
		id: 1,
		name: 'Mike Traher',
		email: 'michael.traher@intoolligent.com',
		password: 'whataguy',
		bio: 'The longest record for awesome guy who still single',
		admin: true
	},
	{
		id: 2,
		name: 'Jon Fei',
		email: 'jon.fei@intoolligent.com',
		password: '1',
		bio: 'The longest record for friend of awesome guy who still single',
		admin: false
	},
	{
		id: 3,
		name: 'Sarah Fei',
		email: 'email',
		password: '2',
		bio: 'Wife of the longest record for friend of awesome guy who still single',
		admin: false
	}
]

router.route('/api/authenticate')
.get(auth.checkToken, function(req, res, next) {
	console.log('SESSION ROUTE - decoded', res.decoded)
	res.json({ user: res.decoded})
})
.post(function(req, res, next) {
	user = users.filter(obj => {
		return obj.email === req.body.email
	})[0]

	if (!user) {
		next(util.error(404, 'User not found'))
	} else if (user.password != req.body.password) {
		next(util.error(403, 'Bad credentials/Please check you email and password'))
	} else if (user.password == req.body.password) {
		let { password, ...data } = user
		jwt.sign(data, config.secret, { expiresIn: '1d'}, (err, token) => {
			res.json({ token })
		})
	}
})

module.exports = router
