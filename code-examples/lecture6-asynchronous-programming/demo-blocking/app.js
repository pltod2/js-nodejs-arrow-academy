var http = require("http");
var url = require('url');

http.createServer(function (req, res) {
    var path = url.parse(req.url, true).path;

    if (path === '/block') {
        block(res, function () {
            process.nextTick(function () {
                send200(res, "I was dead!");
            });
        });
    } else {
        process.nextTick(function () {
            send200(res, "I'm alive!");
        });
    }
}).listen(3000);

var block = function (res, callback) {
    var n = 0;

    while (n <= 20000) {
        var m = 0;
        while (m < 30000000) {
            m++;
        };
        if (n % 1000 === 0) {
            console.log(n/1000);
        }
        n++;
    };

    callback();
}

var send200 = function (res, result) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(result);
    res.end();
}