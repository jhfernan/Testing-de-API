const express = require('express')
const router = express.Router()

const message = {
	title: 'The message',
	status: 'ok',
	clear: true
}

const messageTwo = {
	site: 'active',
	status: 'ok'
}

// Home page
router.get('/', function(req, res, next) {
	res.json(message)
})

// Status page
router.get('/api_status', function(req, res, next) {
	res.json(messageTwo)
})

module.exports = router
