var React = require('react');

var AppSkeleton = React.createClass({

	render: function () {
		return (
			<div className="app-box">

				<core-toolbar className="app-toolbar core-narrow" dangerouslySetInnerHTML={{__html:'<paper-icon-button icon="menu"></paper-icon-button><span flex>Who is a friend around me?</span><paper-icon-button icon="refresh"></paper-icon-button><paper-icon-button icon="more-vert"></paper-icon-button>'}}>
				</core-toolbar>

				<paper-input-decorator className="app-send-box" label="Write something..." layout="" vertical="">
					<paper-autogrow-textarea>
						<textarea placeholder="Write something..." aria-label="Write something..."></textarea>
					</paper-autogrow-textarea>
				</paper-input-decorator>

			</div>
		);
	}
});

module.exports = AppSkeleton;