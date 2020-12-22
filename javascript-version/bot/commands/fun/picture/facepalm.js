const canvacord = require('canvacord'); //npm i canvacord in your terminal
const { MessageAttachment } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	 category: 'Fun',
	aliases: ['fp'],
	minArgs: 1,
	maxArgs: -1,
	syntaxError: 'please mention someone',
	expectedArgs: 'please mention someone',
	description: 'SMH MY HEAD',
	callback: (message, args, text, client, prefix, instance) => {
		async function facep() {
			let user = message.mentions.users.first() || message.author;
			let triggered = await canvacord.Canvas.facepalm(
				user.displayAvatarURL({ format: 'png', dynamic: false })
			);
			let attachment = new MessageAttachment(triggered, 'facepalm.png');
			return message.channel.send(attachment);
		}
		facep();
	},
};
