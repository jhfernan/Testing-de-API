const router = require('express').Router()

const app = require('./app')
const sessions = require('./sessions')

// Add API routes
router.use(app)
router.use(sessions)

module.exports = router
