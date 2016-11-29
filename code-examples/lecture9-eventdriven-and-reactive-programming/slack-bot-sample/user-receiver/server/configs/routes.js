var usersCtrl = require('../ctrls/users');

module.exports = function (app) {
    app.post('/api/users', function (req, res) {
        usersCtrl.create(req.body);
        res.sendStatus(200);
    });
}