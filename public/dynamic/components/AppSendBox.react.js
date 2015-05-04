var React = require('react');

var AppSendBox = React.createClass({

	render: function () {
		return (
			<paper-input-decorator className="app-send-box" label="Write something..." layout="" vertical="">
				<paper-autogrow-textarea>
					<textarea placeholder="Write something..." aria-label="Write something..."></textarea>
				</paper-autogrow-textarea>
			</paper-input-decorator>
		);
	}
});

module.exports = AppSendBox;