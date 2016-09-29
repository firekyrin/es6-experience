import item from './item';

module.exports = {
	template: require('../templates/list.html'),

	data: function () {
		return {items: [{"id": 1, "name": "hello11"}, {"id": 2, "name": "hello22"}]};
	},

	//定义item组件为子组件
	components: {
		'item': item
	},

	//在实例开始初始化时同步调用。此时数据观测、事件和watcher都尚未初始化
	init: function () {
		console.log('init');
	},

	//在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已经建立：数据绑定，计算属性，方法，watcher／事件回调。但是还没开始dom编译，$el还不存在。
	created: function () {
		console.log('created..');
	},

	//在变异开始前调用。
	beforeCompile: function () {
		console.log('beforeCompile..');
	},

	//在编译结束后调用。此时所有的指令已经生效，因而数据的变化将出发dom更新。但是不担保$el已插入文档。
	compiled: function () {
		console.log('compiled..');
	},

	//在编译结束和$el第一次插入文档之后调用，如在第一次attached钩子之后调用。注意必须是由Vue插入（如vm.$appendTo()等方法或指令更新）才触发ready钩子。
	ready: function () {
		console.log('ready..');
	},

	//在vm.$el插入dom时调用。必须是由指令或实例方法（$appendTo()）插入，直接操作vm.$el不会触发这个钩子。
	attached: function () {
		console.log('attached..');
	},

	//在vm.$el从dom中删除时调用。必须是由指令或实例方法删除，直接操作vm.$el不会触发这个钩子。
	detached: function () {
		console.log('detached..');
	},

	//在开始销毁实例时调用。此时实例仍然有功能。
	beforeDestroy: function () {
		console.log('beforeDestroy..');
	},

	//在实例被销毁之后调用。此时所有的绑定和实例的指令已经解绑，所有的子实例也已经被销毁。如果有离开过渡，destroyed钩子在过渡完成之后调用。
	destroyed: function () {
		console.log('destroyed..');
	}
};
