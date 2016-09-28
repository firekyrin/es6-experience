function throwError(value) {
	throw new Error(value);
}

function badMain(onRejected) {
	return Promise.resolve(42).then(throwError, onRejected);
}

function goodMain(onRejected) {
	return Promise.resolve(42).then(throwError).catch(onRejected);
}

badMain(function() {
	console.log('BAD');
});

goodMain(function() {
	console.log('GOOD');
});
