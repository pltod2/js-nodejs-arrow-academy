var express = require('express');
var path = require('path');

module.exports = function(app) {
	app.use(express.static(path.resolve(__dirname, '../../public')));
}