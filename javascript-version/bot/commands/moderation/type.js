const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	category: 'Moderation',
	aliases: ['typeon', 'typeoff'],
	minArgs: 1,
	maxArgs: -1,
	expectedArgs: '<on> <off>',
	description: 'Make the bot start typing :eyes:',
	callback: async ({message, args, text, client, prefix, instance}) => {
		message.delete;
		if (!args[0]) {
			const Embed = new Discord.MessageEmbed()
				.setColor('#03fc49')
				.setTitle(`error`)
				.setDescription(`Please use\n!type off\n!type on`);
			message.reply(Embed).then((msg) => {
				msg.delete({ timeout: 10000 });
			});
			return;
		}
		async function type() {
			if (args[0] === 'on') {
				message.delete;
				message.channel.startTyping();
				const Embed = new Discord.MessageEmbed()
					.setColor('#03fc49')
					.setTitle(`Started typing`);
				message.reply(Embed).then((msg) => {
					msg.delete({ timeout: 500 });
				});
				return;
			} else if (args[0] === 'off') {
				message.delete;
				message.channel.stopTyping();
				const Embed = new Discord.MessageEmbed()
					.setColor('#03fc49')
					.setTitle(`Stopped typing`);
				message.reply(Embed).then((msg) => {
					msg.delete({ timeout: 500 });
				});
				return;
			}
		}
		type();
	},
};
