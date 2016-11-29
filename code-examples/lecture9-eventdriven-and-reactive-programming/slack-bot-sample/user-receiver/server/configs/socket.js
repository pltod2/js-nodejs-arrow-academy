var usersService = require('../services/users');

module.exports = function (io) {
    io.on('connection', function(socket) {
        socket.on('user:login', function(payload) {
            if(payload !== process.env.LOGIN_TOKEN) {
                return socket.disconnect();
            }

            usersService.on('data:user', function(data) {
                socket.emit('data:user', data);
            });
        })
    });
}
