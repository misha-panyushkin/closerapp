var React = require('react');

var AppMessage = React.createClass({

	render: function () {
		return (
			<li>
				{this.props.message.text}
			</li>
		);
	}
});

module.exports = AppMessage;