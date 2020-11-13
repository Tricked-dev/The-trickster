// also nodemon to start the fucking bot
const Discord = require('discord.js');
const WOKCommands = require('wokcommands');
const mongo = require('./mongo');
const config = require('./config.json');
const client = new Discord.Client();
const talkedRecently = new Set();
const cooldowns = new Discord.Collection();
require('dotenv').config();
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