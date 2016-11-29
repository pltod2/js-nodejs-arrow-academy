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
        Users.getById(id, (err, user) => {
            if (err) return send(res, 500, err);

            Accounts.getById(user.accountId, (err, account) => {
                if (err) return send(res, 500, err);

                send(res, 200, account);
            });
        });
    } else {
        send(res, 404, 'Not found!');
    }
}).listen(3000);

var send = function (res, statusCode, result) {
    res.writeHead(statusCode, { "Content-Type": "text/plain" });
    res.end(typeof result !== 'undefined' ? JSON.stringify(result) : '');
}
