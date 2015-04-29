function Geo () {}

(function () {

	this.checkSupport = function () {
		return this.supported = 'geolocation' in navigator;
	};

	this.getPosition = function (root_node) {
		var w = $.Deferred();
		if (this.supported) {
			navigator.geolocation.getCurrentPosition(function(position) {
				w.resolve(position.coords.latitude, position.coords.longitude);
			});
		} else {
			w.reject();
		}
		return w.promise();
	};

}).call(Geo.prototype);

module.exports = new Geo;