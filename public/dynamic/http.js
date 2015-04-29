var netRequests = require('./net.requests');
var httpActions = require('./actions/HTTPActions');

var current_uid = 1;

function HTTP () {}

(function () {

	this.putGPS = function (lat, lon) {
		return netRequests.gps('PUT', JSON.stringify({
			uid: current_uid,
			lat: lat,
			lon: lon
		})).then(function (data, text_status, event) {
			return $.Deferred().resolve();
		}).fail(function (event) {});
	};

	this.getGPS = function (lat, lon) {
		return netRequests.gps('GET', {
			uid: current_uid
		}).then(function (data, text_status, event) {
			return $.Deferred().resolve(data);
		}).fail(function (event) {});
	};

	this.getCorrespondence = function () {
		return netRequests.correspondence('GET', {
			uid: current_uid
		}).then(function (data, text_status, event) {
			httpActions.receiveCorrespondence(data);
			return $.Deferred().resolve(data);
		}).fail(function (event) {});
	};

	this.postMessage = function (text) {
		return netRequests.correspondence('POST', JSON.stringify({
			uid: current_uid,
			text: text
		})).then(function (data, text_status, event) {
			httpActions.receiveMessage(data);
			return $.Deferred().resolve(data);
		}).fail(function (event) {});
	};

}).call(HTTP.prototype);

module.exports = new HTTP;