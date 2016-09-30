var assert = require('power-assert');

describe('Basic Test', function () {
	context('When Callback(high-order function)', function () {
		it('should use `done` for test', function (done) {
			setTimeout(function () {
				assert(true);
				done();
			}, 0);
		});
	});

	context('When promise object', function () {
		it('should use `done` for test?', function (done) {
			var promise = Promise.resolve(1);

			promise.then(function (value) {
				assert(value === 1);
				done();
			});
		});

		it('should use `done` for test??', function (done) {
			var promise = Promise.resolve();
			promise.then(function (value) {
				assert(false); //=> throw AssertionError, but mocha can not get exception, it will hung up util timeout
				done();
			});
		});
		
		it('should use `done` for test???', function (done) {
			var promise = Promise.resolve();
			promise.then(function (value) {
				assert(false);
			}).then(done, done);
		});
	});
});
