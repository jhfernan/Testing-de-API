const jwt = require('jsonwebtoken')

const config = require('../config')
const util = require('./utilities')

const auth = {
	checkToken: (req, res, next) => {
		console.log('FROM AUTH MIDDLEWARE - req headers: ', req.headers)
		let token = req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer'
			? req.headers.authorization.split(' ')[1]
			: null

		if (token) {
			// Decode Token and add to res
			jwt.verify(token, config.secret, (err, decoded) => {
				if (err) {
					next(util.error(403, 'Token is not valid'))
				}
				let { iat, exp, ...data } = decoded
				res.decoded = data
				next()
			})

		} else {
			next(util.error(401, 'No token provided'))
		}
	},

	isAdmin: (req, res, next) => {
		if (res.decoded.admin) {
			next()
		} else {
			next(util.error(401, 'You are not authorized to use this resource'))
		}
	}
}

module.exports = auth
