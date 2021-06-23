const express = require('express')
const router = express.Router()


// Items routes
router.get('/items', function(req, res, next) {
	res.json(items)
})

module.exports = router
