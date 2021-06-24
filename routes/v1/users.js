const router = require('express').Router()

const User = require('../../models/user')

const auth = require('../../middleware/auth')
const util = require('../../middleware/utilities')

const defFilter = { password: 0, __v: 0 }
const safeFilter = { _id: 0, admin: 0, password: 0, __v: 0 }
const defSort = { sort: { createdAt: 1 }}

// Required middleware on all routes
router.use('/users', auth.checkToken)

// User routes
router.route('/users')
.get(auth.isAdmin, async function(req, res, next) {
	const users = await User.find({}, defFilter, defSort)
	res.json(users)
})
.post(auth.isAdmin, async function(req, res, next) {
	const user = await User.create(req.body)
	res.json(user)
})

// User details route
router.route('/users/:id')
.get(async function(req, res, next) {
	try {
		const filter = res.decoded.admin ? defFilter : safeFilter
		const user = await User.findById(req.params.id, filter)
		!user ? next(util.error(404, 'User not found')) : res.json(user)
	} catch (e) {
		next(util.error(404, 'User not found'))
	}
})
.put(async function(req, res, next) {
	try {
		const user = await User.findById(req.params.id, defFilter)
		if (user) {
			if (res.decoded.admin || res.decoded._id == user._id) {
				let data = {}
				req.body.name ? data.name = req.body.name : null
				req.body.bio ? data.bio = req.body.bio : null
				req.body.password ? data.password = req.body.password : null
				user.set(data)
				user.save(err => {
					res.json(user)
				})
			} else {
				next(util.error(403, 'You can not update that User\'s profile'))
			}
		} else {
			next(util.error(404, 'User not found'))
		}
	} catch (e) {
		next(util.error(404, 'User not found'))
	}
})

module.exports = router
