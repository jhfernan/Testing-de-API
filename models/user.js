const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		lowercase: true,
		required: 'Name of user required',
		trim: true
	},

	email: {
		type: String,
		required: 'Email of user required',
		trim: true,
		unique: [true, 'The email you supplied is already in use']
	},

	password: {
		type: String,
		required: 'The password is required',
		minlength: [7, 'You password must be at least 7 character long'],
		maxlength: [30, 'Really??? Who is trying to hack your life to justify 30 characters or more?']
	},

	admin: {
		type: Boolean,
		default: false
	},
	// admin = False
	// token = None
	bio: String,
})

UserSchema.pre('save', function(next) {
	let user = this
	if (user.isModified('password')) {
		user.password = bcrypt.hashSync(user.password, 10)
	}
	next()
})

UserSchema.methods.validPassword = (password, userPassword) => {
	return bcrypt.compareSync(password, userPassword)
}

const User = mongoose.model('User', UserSchema)
module.exports = User
