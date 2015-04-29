var env = process.env.NODE_ENV || 'development';
var keyMirror = require('keyMirror');

var config = {
  development: require('./development.config'),
  production: require('./production.config'),
  staging: require('./staging.config')
};

for (var i in config) {
	config[i]['action_types'] = {
	  	http: keyMirror({
	  		RECEIVE_CORRESPONDENCE: null,
	  		RECEIVE_MESSAGE: null
	  	})
  	};
}

module.exports = config[env];