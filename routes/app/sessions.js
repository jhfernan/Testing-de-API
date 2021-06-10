const router = require('express').Router()
const jwt = require('jsonwebtoken')

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
		password: 'theotherguy',
		bio: 'The longest record for friend of awesome guy who still single',
		admin: false
	}
]

router.route('/api/authenticate')
.get(function(req, res, next) {
	res.json({ status: 'ok'})
})
.post(function(req, res, next) {
	user = users.filter(obj => {
		return obj.email === req.body.email
	})[0]

	if (!user) {
		next(createError(404))
	} else if (user.password != req.body.password) {
		next(createError(403))
	} else if (user.password == req.body.password) {
		jwt.sign(user, 'signingSecret', { expiresIn: '1d'}, (err, token) => {
			res.json({ token })
		})
	}
})

module.exports = router
