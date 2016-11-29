var app = require('express')();
var server = require('http').Server(app);

var io = require('socket.io')(server);

require('./server/configs/socket')(io);
require('./server/configs/express')(app);
require('./server/configs/routes')(app);

server.listen();
