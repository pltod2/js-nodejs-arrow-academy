// Defines slack bot's export option. In order to use it type in slack '/msg @{botsName} export {@usernameToBeingExported}

var slackUtils = require('../utils/slack');
var requestUtils = require('../utils/request');

// Auto called by slack-terminalize pkg
module.exports = function (param) {
    var usernames = param.args;

    // Test the received params from slack
    // If the received params are not in the format '<@{username}>' 
    // the slack client will display err msg in slack!
    if (!usernames || !usernames.length || !/^<@(.+)>$/.test(usernames[0])) {
        return slackUtils.postMessage(param.channel, 'Missing or wrong username!');
    }

    // Extract the username
    var usernameParsed = usernames[0].match(/^<@(.+)>$/)[1];

    // Send request to slack in order to receive user's information
    slackUtils.getUserInfo(usernameParsed, function (user) {
        // Send the user's information(name, email) to another microservice
        requestUtils.notifyHost({
            url: process.env.USERS_MS_URL + '/api/users',
            data: {
                user: user.real_name,
                email: user.profile.email
            }
        }, function (err) {
            if(err) {
                // Notify in slack on error!
                slackUtils.postMessage(param.channel, 'Internal server error');
                return console.dir(err);
            }

            setImmediate(function () {
                // Post a message in slack that the operation has succeeded
                slackUtils.postMessage(param.channel, 'The user: `' + user.real_name + '` was exported!', false);
            });
        });
    });
};