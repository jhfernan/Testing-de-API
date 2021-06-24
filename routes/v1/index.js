const router = require('express').Router()

const users = require('./users')
const items = require('./items')

// Add API routes
router.use(users)
router.use(items)

module.exports = router
