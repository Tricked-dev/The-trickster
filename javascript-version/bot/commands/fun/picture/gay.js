const canvacord = require('canvacord'); //npm i canvacord in your terminal
const { MessageAttachment } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	 category: 'Fun',
	aliases: [''],
	minArgs: 1,
	maxArgs: -1,
	syntaxError: 'please mention someone',
	expectedArgs: 'please mention someone',
	description: 'Some things have to happen.',
	callback: (message, args, text, client, prefix, instance) => {
		async function facep() {
			let user = message.mentions.users.first() || message.author;
			let triggered = await canvacord.Canvas.rainbow(
				user.displayAvatarURL({ format: 'png', dynamic: false })
			);
			let attachment = new MessageAttachment(triggered, 'rainbow.png');
			return message.channel.send(attachment);
		}
		facep();
	},
};
