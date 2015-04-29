var config = require('./config/config');

function NetRequests () {}

(function () {

	this.gps = function (method, data) {
		return $.ajax({
			url: config.net.api.gps,
			type: method,
			dataType: 'json',
		 	headers: {          
         		Accept : "application/json",
         		"Content-Type": "application/json"
         	},
			data: data
		});
	};

	this.correspondence = function (method, data) {
		return $.ajax({
			url: config.net.api.correspondence,
			type: method,
			dataType: 'json',
		 	headers: {          
         		Accept : "application/json",
         		"Content-Type": "application/json"
         	},
			data: data
		});
	};

}).call(NetRequests.prototype);

module.exports = new NetRequests;