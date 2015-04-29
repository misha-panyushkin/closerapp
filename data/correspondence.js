var _ = require('lodash');

var _database = {};

function Correspondence () {}

(function () {

	this.createCorrespondence = function (uid) {
		return _database[uid] = {
			messages: []
		};
	};

	this.addMessage = function (uid, text) {
		var correspondence = this.getCorrespondence(uid) || this.createCorrespondence(uid);
		var id = _.result(_.last(correspondence.messages), 'id', 0) + 1;
		var message = {
			id: id,
			date: +new Date,
			text: text,
		};
		_database[uid].messages.push(message);
		return message;
	};

	this.getCorrespondence = function (uid) {
		if (!_database[uid]) {
			this.createCorrespondence(uid);
		}
		return _database[uid];
	};

}).call(Correspondence.prototype);

module.exports = new Correspondence;