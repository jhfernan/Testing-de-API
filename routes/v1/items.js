const router = require('express').Router()

const Item = require('../../models/item')

const auth = require('../../middleware/auth')
const util = require('../../middleware/utilities')

const defFilter = { __v: 0 }
const defSort = { sort: { brand: 1 }}

// Required middleware on all routes
// router.use('/items', auth.checkToken)

// Items routes
router.route('/items')
.get(async function(req, res, next) {
	const items = await Item.find({}, defFilter, defSort)
	res.json(items)
})

module.exports = router
