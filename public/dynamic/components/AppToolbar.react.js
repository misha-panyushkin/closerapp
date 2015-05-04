var React = require('react');

var AppToolbar = React.createClass({

	componentDidMount: function() {
        this.refs.label.getDOMNode().setAttribute('flex',1);
    },

	render: function () {
		return (
			<core-toolbar className="app-toolbar core-narrow">
				<paper-icon-button icon="menu"></paper-icon-button>
				<span ref='label'>Who is a friend around me?</span>
				<paper-icon-button icon="refresh"></paper-icon-button>
				<paper-icon-button icon="more-vert"></paper-icon-button>
			</core-toolbar>
		);
	}
});

module.exports = AppToolbar;