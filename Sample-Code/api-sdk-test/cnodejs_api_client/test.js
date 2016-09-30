'use strict';

const CNodeJS = require('./');
const client = new CNodeJS();

/*
client.request('GET', 'topics', {page: 1})
	.then(ret => console.log(ret))
	.catch(err => console.error(err));
*/

client.request('GET', 'topics', {page: 1}, (err, ret) => {
	if (err) {
		console.error(err);
	}
	else {
		console.log(ret);
	}
});
