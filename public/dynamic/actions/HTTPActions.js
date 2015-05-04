var config = require('../config/config');
var dispatcher = require('../dispatcher/dispatcher');

var types = config.action_types.http;

function HTTPActions () {};

(function () {

	this.receiveCorrespondence = function (data) {
		dispatcher.dispatch({
			type: types.RECEIVE_CORRESPONDENCE,
			correspondence: data
		});
	};

	this.receiveMessage = function (data) {
		dispatcher.dispatch({
			type: types.RECEIVE_MESSAGE,
			message: data
		});
	};

}).call(HTTPActions.prototype);

module.exports = new HTTPActions;