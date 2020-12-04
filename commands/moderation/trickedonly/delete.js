const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

module.exports = {
	aliases: ['delmsg', 'msgdel'],
	category: 'tricked',
	minArgs: 1,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description:
		'Trickedonly command until i find a way to make anyone with perms and me able to use it <3',
	callback: (message, args, text, client, prefix, instance) => {
		async function dels() {
			if (message.author.id == 336465356304678913) {
				let id = args[0];

				let msg = await message.channel.messages.fetch(id);

				msg.delete();

				if (args[1] !== '-s') {
					const Embed = new Discord.MessageEmbed()
						.setColor('#03fc49')
						.setTitle(`Message deleted!`);
					message.reply(Embed);
					message.member.delete();
				}
			} else {
				const Embed = new Discord.MessageEmbed()
					.setColor('#03fc49')
					.setTitle(`Sorry, you are not allowed to use this`);
				message.reply(Embed).then((msg) => {
					msg.delete({ timeout: 2000 });
					return;
				});
			}
		}
		dels();
	},
};
