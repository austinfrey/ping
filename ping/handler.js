'use strict';

const got = require('got');

const ping = (context, callback) => {
	got(context)
		.then(x => callback(x.statusCode + ' ' + x.statusMessage))
		.catch(err => callback(err));
};

module.exports = ping;
