var EventEmitter = require('events').EventEmitter;
var util = require('util');

function UsersService(socket) {
    EventEmitter.call(this);
}

util.inherits(UsersService, EventEmitter);

UsersService.prototype.create = function (data) {
    this.emit('data:user', data);
}

module.exports = new UsersService();
