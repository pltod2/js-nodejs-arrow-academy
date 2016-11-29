var usersService = require('../services/users');

exports.create = function (data) {
    usersService.create(data);
}
