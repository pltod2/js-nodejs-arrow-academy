var http = require("http");
var url = require('url');

var db = require('../common/db').db;
var Users = db.Users;
var Accounts = db.Accounts;

http.createServer(function (req, res) {
    var path = url.parse(req.url, true).path;

    var params = path.split('/');
    var id = params[params.length - 2];

    if (typeof path === 'string'
        && path.match('\/users\/.+\/accounts', 'i')
        && typeof id !== 'undefined') {
        getUsersAccountByUserId(id, function (err, data) {
            if (err) return send(res, 500, err);

            send(res, 200, data);
        });
    } else {
        send(res, 404, 'Not found!');
    }
}).listen(3000);

var getUsersAccountByUserId = function (id, cb) {
    getUserById(id, (err, data) => {
        if (err) {
            return cb(err);
        }

        cb(null, data);
    });
}

var getUserById = function (id, cb) {
    Users.getById(id, (err, user) => {
        if (err) {
            return cb(err);
        }

        getAccountById(user.accountId, cb);
    });
}

var getAccountById = function (id, cb) {
    Accounts.getById(id, (err, account) => {
        if (err) {
            return cb(err);
        }

        cb(null, account);
    });
}

var send = function (res, statusCode, result) {
    res.writeHead(statusCode, { "Content-Type": "text/plain" });
    res.end(typeof result !== 'undefined' ? JSON.stringify(result) : '');
}
