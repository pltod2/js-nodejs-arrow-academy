const express = require('express');
const app = express();
const config = require('./config/env.js')[process.env.NODE_ENV || 'production'];
const http = require('http');

require('./config/express.js')(app);
require('./config/routes.js')(app);

const server = http.createServer(app);

server.listen(config.PORT, () => {
	console.log(`Server running at port: ${config.PORT}`);
});

const io = require('socket.io')(server);
require('./config/io.js')(io);