var React = require('react');
var AppToolbar = require('./AppToolbar.react');
var AppSendBox = require('./AppSendBox.react');
var AppMessages = require('./AppMessages.react');

var AppSkeleton = React.createClass({

	render: function () {
		return (
			<div className="app-box">
				<AppToolbar/>
				<AppMessages/>
				<AppSendBox/>
			</div>
		);
	}
});

module.exports = AppSkeleton;