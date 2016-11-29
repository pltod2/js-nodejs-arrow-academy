var slackTerminalize = require('slack-terminalize');
var webClient = slackTerminalize.getWebClient();

// Get slack's user information'
var getUserInfo = function (username, cb) {
	webClient.users.info(username, function (err, response) {
		if (err || (response && !response.ok)) {
			return cb(err ? err : response);
		}

		cb(response.user);
	});
};

// Post message in slack's channel'
var postMessage = function (channel, response, format) {
	format = typeof format !== 'undefined' ? format : true;
	response = (format && '```' + response + '```') || response;

	webClient.chat.postMessage(channel, response, {
		as_user: true
	});
};

// Export the methods
module.exports = {
	postMessage: postMessage,
	getUserInfo: getUserInfo
};