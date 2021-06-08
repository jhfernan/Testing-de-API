const express = require('express')
const router = express.Router()

const items = [
	{
		brand: 'Apple',
		name: 'iPad Pro 10.5in',
		color: 'Silver',
		storage: '64GB'
	},
	{
		brand: 'Apple',
		name: 'MacBook Pro',
		color: 'Silver',
		storage: '500GB',
		memory: '8GB'
	},
	{
		brand: 'Apple',
		name: 'Watch',
		size: '44mm',
		series: '5',
		color: 'Space Gray',
		band_color: 'Black',
		band_material: 'Florelolastimer'
	}
]

// Items routes
router.get('/items', function(req, res, next) {
	res.json(items)
})

module.exports = router
