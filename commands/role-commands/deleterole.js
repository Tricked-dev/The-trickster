const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	aliases: [''],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: 'deletes a role via name',
	callback: (message, args, text, client, prefix, instance) => {
		if (!message.member.hasPermission('MANAGE_ROLES')) {
			const Embed = new Discord.MessageEmbed()
				.setColor('#03fc49')
				.setTitle(`Error, you are not allowed to do this`);
			message.reply(Embed);
			return;
		}
		let rolename = args[0];
		let role = message.guild.roles.cache.find(
			(role) => role.name === `${args[0]}`
		);
		if (!role) {
			const Embed = new Discord.MessageEmbed()
				.setColor('#03fc49')
				.setTitle(`${rolename} Was not found!`);
			message.reply(Embed);
			return;
		}
		role.delete(role);
		const Embed = new Discord.MessageEmbed()
			.setColor('#03fc49')
			.setTitle(`${rolename} role deleted from the server`);
		message.reply(Embed);
	},
};
