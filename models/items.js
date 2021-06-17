//import mongoose
const mongoose = require('mongoose')

//create an item Schema using mongoose
const ItemSchema = new mongoose.Schema({
	brand: {
		type: 'String',
	},
	name: {
		type: 'String',
	},
	color: {
		type: 'String',
	},
	storage: {
		type: 'String'
	},
	memory: {
		type: 'String',
	},
	size:{
		type: 'String',
	},
	bandColor: {
		type: 'String',
	},
	bandMaterial: {
		type: 'String',
	}
})

const Item = mongoose.model('Item', ItemSchema)
