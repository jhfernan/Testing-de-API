// import mongoose
const mongoose = require('mongoose')

// create an item Schema using mongoose
const ItemSchema = new mongoose.Schema({
	// 		storage: '64GB'
	// 		memory: '8GB'
	// 		size: '44mm',
	// 		series: '5',
	// 		bandColor: 'Black',
	// 		bandMaterial: 'Florelolastimer'
	brand: {
		type: String,
		required: true,
		maxlength: [40, 'Cut that out']
	},
	name: {
		type: String,
		required: true,
		maxlength: [40, 'Cut that out']
	},
	color: {
		type: String,
		required: true,
		maxlength: [20, 'Cut that out']
	},

	storage: {
		type: String,
	},
	memory: {
		type: String,
	},

	size:{
		type: String,
	},
	bandColor: {
		type: String,
	},
	bandMaterial: {
		type: String,
	}
})

const Item = mongoose.model('Item', ItemSchema)
