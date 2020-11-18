const Discord = require('discord.js');
const WOKCommands = require('wokcommands');
const config = require('./config.json');
const client = new Discord.Client();;
client.on('ready', () => {
	new WOKCommands(client, 'commands', 'features')
		.setMongoPath(
			config.mongoPath
		)
		.setSyntaxError(
			'Incorrect syntax! Please use {PREFIX}{COMMAND} {ARGUMENTS}'
		);
});
client.login(config.token);