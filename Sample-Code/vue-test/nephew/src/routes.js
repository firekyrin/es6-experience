module.exports = {
	'/': {
		component: require('./components/index'),

		//子路由
		subRoutes: {
			//默认显示Tab1
			"/": {
				component: require('./components/tab1')
			},

			"/tab1": {
				component: require('./components/tab1')
			},
			"/tab2": {
				component: require('./components/tab2')
			}
		}
	},

	'/list': {
		component: require('./components/list'),
	},

	//增加详情页的跳转路由，并在路径上加上id传参，具名为name：show
	'/show/:id': {
		name: 'show',
		component: require('./components/show')
	},
	'*': {
		component: require('./components/notFound'),
	}
}
