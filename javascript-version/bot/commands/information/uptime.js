const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	category: 'Info',
	aliases: ['up'],
	minArgs: 0,
	maxArgs: -1,
	
	expectedArgs: '',
	description: 'Show uptime of the bot!',
	callback: (message, args, text, client, prefix, instance) => {
		let uptime = ``;
		let totalSeconds = client.uptime / 1000;
		let week = Math.floor(totalSeconds / 604800);
		totalSeconds %= 604800;
		let days = Math.floor(totalSeconds / 86400);
		totalSeconds %= 86400;
		let hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		let minutes = Math.floor(totalSeconds / 60);
		let seconds = Math.floor(totalSeconds % 60);

		if (hours > 23) {
			days = days + 1;
			hours = 0;
		}

		if (days == 7) {
			days = 0;
			week = week + 1;
		}

		if (week > 0) {
			uptime += `${week} week, `;
		}

		if (minutes > 60) {
			minutes = 0;
		}

		uptime += `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

		let serverembed = new Discord.MessageEmbed()
			.setColor('#228B22')
			.addField('Bots Uptime', uptime);

		message.channel.send(serverembed);
	},
};
