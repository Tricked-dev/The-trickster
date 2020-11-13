const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	aliases: [''],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: 'trickedonly /shrug',
	callback: (message, args, text, client, prefix, instance) => {
		const input = args.join(' ');
		if (message.author.id == 336465356304678913) {
			message.delete();
			message.channel.send(input);
			return;
		}

		const Embed = new Discord.MessageEmbed()
			.setColor('#03fc49')
			.setTitle(`Error, you are not allowed to do this`);
		message.reply(Embed);
	},
};
