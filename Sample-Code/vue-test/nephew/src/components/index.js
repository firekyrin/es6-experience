import tab1 from "./tab1";
import tab2 from "./tab2";

module.exports = {
	template: require('../templates/index.html'),

	components: {
		"tab1": tab1,
		"tab2": tab2
	},

	ready: function () {}
};
