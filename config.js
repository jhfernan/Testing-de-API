let config = {
	secret: 'signingSecret'
}

if (process.env.NODE_ENV == 'production') {
	config.secret = process.env.CONFIG_KEY
}

module.exports = config
