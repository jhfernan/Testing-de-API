const router = require('express').Router()
const jwt = require('jsonwebtoken')

const User = require('../../models/user')

const auth = require('../../middleware/auth')
const config = require('../../config')
const util = require('../../middleware/utilities')

const defFilter = { __v: 0 }

router.route('/api/authenticate')
.get(auth.checkToken, function(req, res, next) {
	console.log('SESSION ROUTE - decoded', res.decoded)
	res.json({ user: res.decoded})
})
.post(async function(req, res, next) {
	const user = await User.findOne({ email: req.body.email }, defFilter)
	console.log('MIDDLE OF SESS - user', user)
	if (!user) {
		next(util.error(404, 'User not found'))
	} else if (!user.validPassword(req.body.password, user.password)) {
		next(util.error(403, 'Bad credentials/Please check you email and password'))
	} else if (user.validPassword(req.body.password, user.password)) {
		let { password, ...data } = user._doc
		jwt.sign(data, config.secret, { expiresIn: '1d'}, (err, token) => {
			res.json({ token })
		})
	}
})

module.exports = router
