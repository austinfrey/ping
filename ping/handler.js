"use strict"

const got = require('got')

const ping = (context, callback) => {
	got(context)
		.then(x => callback(x.statusCode + ' ' + x.statusMessage))
		.catch(err => console.log(err))
}

module.exports = ping
