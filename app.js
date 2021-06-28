var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

const mongoose = require('mongoose')

const general = require('./routes/app/index')
const apiV1 = require('./routes/v1/index')

var app = express()

// Server setup
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Make Mongoose to MongoDB connection
const mongooseOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
}

mongoose.connect('mongodb://localhost/jmtesting', mongooseOptions)

const db = mongoose.connection
db.on('error', err => {
	logError(err)
})
db.once('open', () => {
	// require('./models/seed.js')
	// require('./models/seed2.js')
	console.log('Connected to MongoDB!')
})

// Set routes
app.use('/', general)
app.use('/api/v1', apiV1)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
	// Set error
	let error = {
		status: err.status || 500,
		message: err.message || 'Internal server error'
	}

	// Dev console
	if (error.status == 500) {
		console.log('FROM app.js ERROR HANDLER: ', err)
	}

	// render the error page
	res.status(error.status).json(error)
})

module.exports = app
