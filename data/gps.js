var database = {};

function GPS () {}

(function () {

	this.setData = function (uid, lat, lon) {
		database[uid] = {
			lat: lat,
			lon: lon
		};
	};

	this.getData = function (uid) {
		return database[uid];
	};

}).call(GPS.prototype);

module.exports = new GPS;