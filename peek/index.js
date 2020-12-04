const Discord = require('discord.js');
const WOKCommands = require('wokcommands');
const config = require('./config.json');
const client = new Discord.Client();;
const Enmap = require("enmap");
client.on('ready', () => {
    new WOKCommands(client, 'commands', 'features')
		.setMongoPath(config.mongoPath)
		.setSyntaxError('Incorrect syntax! Please use {PREFIX}{COMMAND} {ARGUMENTS}')
        .setCategoryEmoji('Points', '🤑').setCategoryEmoji('Fun', '🎮').setCategoryEmoji('Moderation', '😎').setCategoryEmoji('Other', '😲').setCategoryEmoji('Hypixel Skyblock', '😲')
    });

client.userProfiles = new Enmap({
    name: 'userProfiles'
});

client.login(config.token);