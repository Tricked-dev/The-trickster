const canvacord = require('canvacord');
const { MessageAttachment } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	 category: 'Fun',
	aliases: ['enclose'],
	minArgs: 1,
	maxArgs: -1,
	expectedArgs: 'please mention someone',
	description: 'Some things have to happen.',
	callback: (message, args, text, client, prefix, instance) => {
		async function facep() {
			let user = message.mentions.users.first() || message.author;
			let triggered = await canvacord.Canvas.jail(
				user.displayAvatarURL({ format: 'png', dynamic: false })
			);
			let attachment = new MessageAttachment(triggered, 'jail.png');
			return message.channel.send(attachment);
		}
		facep();
	},
};
