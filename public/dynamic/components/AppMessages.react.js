var React = require('react');
var AppMessage = require('./AppMessage.react');
var CorrespondenceStore = require('../stores/correspondence.store');
var _ = require('lodash');

var AppMessages = React.createClass({

	getInitialState: _getMessages,

	componentDidMount: function () {
		CorrespondenceStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function () {
		CorrespondenceStore.removeChangeListener(this._onChange);
	},

	render: function () {
		return (
			<ul>
				{_.map(this.state.messages, function (message) {
					return <AppMessage key={"message" + message.id} message={message}/>;
				}.bind(this))}
			</ul>
		);
	},

	_onChange: function () {
		this.setState(_getMessages());
	}
});

function _getMessages () {
	return {
		messages: CorrespondenceStore.getAllMessages()
	};
}

module.exports = AppMessages;