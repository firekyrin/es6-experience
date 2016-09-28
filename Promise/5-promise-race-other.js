var winnerPromise = new Promise(function (resolve) {
	setTimeout(function () {
		console.log('this is winner');
		resolve('this is winner 2');
	}, 4);
});

var loserPromise = new Promise(function (resolve) {
	setTimeout(function () {
		console.log('this is loser');
		resolve('this is loser 2');
	}, 1000);
});

Promise.race([winnerPromise, loserPromise]).then(function(value){
	console.log(value);
});
