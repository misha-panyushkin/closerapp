var config = require('../config/config');
var dispatcher = require('../dispatcher/dispatcher');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var _correspondence = {
	messages: []
};

var CorrespondenceStore = assign({}, EventEmitter.prototype, {

	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function (handler) {
		this.on(CHANGE_EVENT, handler);
	},

	removeChangeListener: function (handler) {
		this.removeListener(CHANGE_EVENT, handler);
	},

	getAllMessages: function () {
		return _correspondence.messages;
	}
});

CorrespondenceStore.dispatchToken = dispatcher.register(function (action) {

	switch (action.type) {

		case config.action_types.http.RECEIVE_CORRESPONDENCE:
			_correspondence = action.correspondence;
			CorrespondenceStore.emitChange();
			break;

		case config.action_types.http.RECEIVE_MESSAGE:
			_updateMessage(action.message);
			break;

	}
});

function _updateMessage (message) {
	if (_correspondence.messages.length === 0) {
		_correspondence.messages.push(message);
		CorrespondenceStore.emitChange();
		return;
	}

	_.find(_correspondence.messages, function (current, index, list) {
		var predicate = current.id === message.id;
		if (predicate) {
			list.splice(index, 1, message);
			CorrespondenceStore.emitChange();

		} else if (list.length-1 === index) {
			list.push(message);
			CorrespondenceStore.emitChange();
		}
		return predicate;
	});
}

module.exports = CorrespondenceStore;