module.exports = {
	template: require('../templates/show.html'),

	data: function () {
		return {};
	},

	created: function () {
		//获取params的参数ID
		var id=this.$route.params.id;

		//根据获取的参数ID，返回不同的data对象（真实业务中，这里应该是Ajax获取数据）
		if (id == 1) {
			this.$data = {'id': id, 'name': 'hello11', 'age': 24};
		}
		else {
			this.$data = {'id': id, 'name': 'hello22', 'age': 28};
		}
	},

	ready: function () {
		console.log(this.$data);
	}
};
