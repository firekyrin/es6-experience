var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);
Vue.config.debug = true;
Vue.config.delimiters = ['${', '}']; //把默认的{{}}改为es6的模板字符串${}
Vue.config.devtools = true;

var App = Vue.extend({});
var router = new VueRouter({});

router.map(require('./routes'));
router.start(App, '#app');
router.go({'path': '/'});
