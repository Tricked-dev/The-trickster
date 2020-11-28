const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = (client, statcord) => {

	client.on('message', (message, statcord) => {
		if (!message.content.startsWith('!') || message.author.bot) return;
		statcord.postCommand(command, message.author.id);
        statcord.post();

		






	});
};
