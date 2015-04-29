var config = require('./config/config');

var http = require('./http');
var geo = require('./geolocation');

var React = require('react');
var AppSkeleton = require('./components/AppSkeleton.react');

if (config.debug) {
	window.closerdebug = require('./debug');
}

function App () {}

(function () {

	this.start = function () {
		if (geo.checkSupport()) {
			geo.getPosition().done(function (latitude, longitude) {
				http.putGPS(latitude, longitude);
			});
		}
		
		http.getCorrespondence();

		React.render(
			<AppSkeleton/>,
			document.getElementById('react-stage')
		);
	};

}).call(App.prototype);

window.closerapp = new App();