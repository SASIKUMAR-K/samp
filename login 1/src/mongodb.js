const mongoose = require('mongoose');

mongoose
	.connect('mongodb://0.0.0.0:27017/creddb')
	.then(() => {
		console.log('mongoose connected');
	})
	.catch((e) => {
		console.log('failed');
	});

const det = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const dbcol = new mongoose.model('dbcols', det);

module.exports = dbcol;
