const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	category: 'Moderation',
	aliases: [''],
	minArgs: 1,
	maxArgs: -1,
	syntaxError: 'please mention someone',
	expectedArgs: 'please mention someone',
	description: 'mute sum1',
	callback: (message, args, text, client, prefix, instance) => {
		if (!message.member.hasPermission('MANAGE_ROLES')) {
			const Embed = new Discord.MessageEmbed()
				.setColor('#03fc49')
				.setTitle(`Error, you are not allowed to do this`);
			message.reply(Embed);
			return;
		}

		let member = message.mentions.members.first();
		let role = message.guild.roles.cache.find((role) => role.name === 'muted');
		if (!role) {
			const Embed = new Discord.MessageEmbed()
				.setColor('#03fc49')
				.setTitle(`No muted role found please create one`);
			message.reply(Embed);
			return;
		}
		member.roles.remove(role);
		const Embed = new Discord.MessageEmbed()
			.setColor('#03fc49')
			.setTitle(`${member.user.tag} Just got unmuted`);
		message.reply(Embed);
	},
};
