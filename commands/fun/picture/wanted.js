const canvacord = require('canvacord');
const { MessageAttachment } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	 category: 'Fun',
	aliases: ['bounty'],
	minArgs: 1,
	maxArgs: -1,
	syntaxError: 'please mention someone',
	expectedArgs: 'please mention someone',
	description: 'Wanted people smh my head.',
	callback: (message, args, text, client, prefix, instance) => {
		async function facep() {
			let user = message.mentions.users.first() || message.author;
			let triggered = await canvacord.Canvas.wanted(
				user.displayAvatarURL({ format: 'png', dynamic: false })
			);
			let attachment = new MessageAttachment(triggered, 'wanted.png');
			return message.channel.send(attachment);
		}
		facep();
	},
};
