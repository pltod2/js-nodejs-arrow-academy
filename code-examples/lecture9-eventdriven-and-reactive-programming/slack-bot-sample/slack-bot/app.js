var slackTerminal = require('slack-terminalize');

// Initialize slack client
slackTerminal.init(process.env.SLACK_TOKEN, {
}, {
		CONFIG_DIR: __dirname + '/config',
		COMMAND_DIR: __dirname + '/commands'
	});

