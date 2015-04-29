var gpsdb = require('./data/gps.js');
var correspondencedb = require('./data/correspondence.js');

var compress = require('compression');
var bodyParser = require('body-parser')
var express = require("express");
var app = express();

app.use(compress());
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function (req, res) {
	res.setHeader('Cache-Control', 'no-store');
	res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.sendFile('/public/index.html');
});


/* GPS API */
app.route('/api/gps')
.all(function (req, res, next) {

	if (!req.accepts('application/json')) {
		res.status(406).send();

	} else if (req.header('Content-Type') !== 'application/json') {
		res.status(403).send();

	} else {
		res.setHeader('Cache-Control', 'no-store');
		res.setHeader('Content-Type', 'application/json');
		next();
	}
})
.get(function (req, res) {

	if (req.query.uid) {
		res.status(200).json({
			gps: gpsdb.getData(req.query.uid) || null
		});

	} else {
		res.status(400).send();
	}
})
.put(function (req, res) {

	if (req.body.uid && req.body.lat && req.body.lon) {
		gpsdb.setData(req.body.uid, req.body.lat, req.body.lon);
		res.status(200).json({"done":1});

	} else {
		res.status(400).send();
	}
});


/* CHAT API */
app.route('/api/correspondence')
.all(function (req, res, next) {

	if (!req.accepts('application/json')) {
		res.status(406).send();

	} else if (req.header('Content-Type') !== 'application/json') {
		res.status(403).send();

	} else {
		res.setHeader('Cache-Control', 'no-store');
		res.setHeader('Content-Type', 'application/json');
		next();
	}
})
.get(function (req, res) {

	if (req.query.uid) {
		res.status(200).json({
			correspondence: correspondencedb.getCorrespondence(req.query.uid) || null
		});

	} else {
		res.status(400).send();
	}
})
.post(function (req, res) {

	if (req.body.uid && req.body.text) {
		res.status(200).json({
			message: correspondencedb.addMessage(req.body.uid, req.body.text)
		});
	} else {
		res.status(400).send();
	}
});

app.listen(3456);