const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	category: 'tricked',
	aliases: [''],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: 'Makes the bot say something',
	callback: (message, args, text, client, prefix, instance) => {
		const input = args.join(' ');
		if (message.author.id == 336465356304678913) {
			message.delete();
			message.channel.send(input);
			return;
		} else {
			message.channel.send('Sorry you are not allowed to use this.')
		}

		
	}
}
