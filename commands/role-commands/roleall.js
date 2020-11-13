const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	aliases: ['rlall'],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: 'currently not a thing',
	callback: (message, args, text, client, prefix, instance) => {
		message.reply(`currently non working`);
		let roles = args.slice(0).join(' ');
		let role = message.guild.roles.cache.find(
			(role) => role.name === `${roles}`
		);

		if (!role)
			return message.channel.send(
				`**${message.author.username}**, role not found`
			);

		message.guild.members
			.filter((m) => !m.user.bot)
			.forEach((member) => member.roles.add(role));
		message.channel.send(
			`**${message.author.username}**, role **${role.name}** was added to all members`
		);
	},
};
