var http = require('./http');
var geo = require('./geolocation');

function Debug () {}

(function () {

	this.http = http;
	this.geo = geo;

}).call(Debug.prototype);

module.exports = new Debug;