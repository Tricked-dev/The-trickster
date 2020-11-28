const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	category: 'Other',
	aliases: [''],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: 'check yur connection',
	callback: (message, args, text, client, prefix, instance) => {
		async function ping() {
			message.channel.send('Pinging...').then((m) => {
				// The math thingy to calculate the user's ping
				var ping = m.createdTimestamp - message.createdTimestamp;

				// Basic embed
				var embed = new Discord.MessageEmbed()
					.setAuthor(`Your ping is ${ping}`)
					.setColor('Your Color');

				// Then It Edits the message with the ping variable embed that you created
				m.edit(embed);
			});
		}
		ping();
	},
};
