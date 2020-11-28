const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	category: 'Moderation',
	aliases: [''],
	minArgs: 1,
	maxArgs: -1,
	syntaxError: 'please mention someone',
	expectedArgs: 'please mention someone',
	description: 'check perms of someone',
	callback: (message, args, text, client, prefix, instance) => {
		let member = message.mentions.members.first();
		let roleinfo = member.permissions.toArray();

		const Embed = new Discord.MessageEmbed()
			.setColor(0x00ae86)
			.setTitle(`Permissions of ${member.user.tag}`)
			.setTimestamp()
			.setDescription(`${roleinfo}`);

		message.reply(Embed);
	},
};
