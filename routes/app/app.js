const router = require('express').Router()

const message = {
	title: 'The message',
	status: 'ok',
	clear: true
}

const messageTwo = {
	site: 'under construction',
	status: 'closed'
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
