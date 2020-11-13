const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	aliases: [''],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: 'get a role! (via name)',
	callback: (message, args, text, client, prefix, instance) => {
		let rolename = args[0];
		let role = message.guild.roles.cache.find(
			(role) => role.name === `${args[0]}`
		);
		message.member.roles.add(role);
		const Embed = new Discord.MessageEmbed()
			.setColor('#03fc49')
			.setTitle(`${rolename} added`);
		message.reply(Embed);
	},
};
