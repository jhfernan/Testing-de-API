const router = require('express').Router()

const Item = require('../../models/item')

const auth = require('../../middleware/auth')
const util = require('../../middleware/utilities')

const defFilter = { __v: 0 }
const defSort = { sort: { name: 1 }}

// Required middleware on all routes
// router.use('/items', auth.checkToken)

// Items routes
router.route('/items')
.get(async function(req, res, next) {
	try {
		const items = await Item.find({}, defFilter, defSort)
		!items ? next(util.error(404, 'Items not found')) : res.json(items)
	} catch (e) {
		next(util.error(500, 'Error retrieving documents'))
	}
})

module.exports = router
