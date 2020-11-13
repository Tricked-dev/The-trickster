const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	aliases: [''],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: 'Get a role! (via id)',
	callback: (message, args, text, client, prefix, instance) => {
		let roles = args[0];
		const member = message.member;
		member.roles.add(`${roles}`);
		const Embed = new Discord.MessageEmbed()
			.setColor('#03fc49')
			.setTitle(`Role added`);
		message.reply(Embed);
	},
};
