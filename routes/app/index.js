const express = require('express')
const router = express.Router()

const app = require('./app')

// Add API routes
router.use(app)

module.exports = router
