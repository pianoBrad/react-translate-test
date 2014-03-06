var express 	= require('express');
var browserify 	= require('connect-browserify');
var render 		= require('react').renderComponentToString;
var App			= require('./client');

express()
	.use('/bundle.js', browserify.serve({
		entry: __dirname + '/client',
		debug: true, watch: true
	})) 
	.get('/', function(req, res, next) {
		res.send(render(App()));
	})
	.listen(3000, function() {
		console.log('Point your browser to http://localhost:3000');
	});