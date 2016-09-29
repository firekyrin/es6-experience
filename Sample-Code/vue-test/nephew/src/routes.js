module.exports = {
	'/': {
		component: require('./components/index'),
	},
	'/list': {
		component: require('./components/list'),
	},
	'*': {
		component: require('./components/notFound'),
	}
}
