var http = require("http");
var url = require('url');

var db = require('../common/db').dbPromise;
var Users = db.Users;
var Accounts = db.Accounts;

http.createServer(function (req, res) {
    var path = url.parse(req.url, true).path;

    var params = path.split('/');
    var id = params[params.length - 2];

    if (typeof path === 'string'
        && path.match('\/users\/.+\/accounts', 'i')
        && typeof id !== 'undefined') {
        Users.getById(id).then(function (user) {
            return Accounts.getById(user.accountId);
        }).then(function (data) {
            send(res, 200, data);
        }).catch(function (err) {
            send(res, 500, err);
        });
    } else {
        send(res, 404, 'Not found!');
    }
}).listen(3000);

var send = function (res, statusCode, result) {
    res.writeHead(statusCode, { "Content-Type": "text/plain" });
    res.end(typeof result !== 'undefined' ? JSON.stringify(result) : '');
}
