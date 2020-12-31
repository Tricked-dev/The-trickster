const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	category: 'Info',
	aliases: ['rm'],
	minArgs: 0,
	maxArgs: -1,
	
	expectedArgs: '',
	description: 'Shows all roles on the server!',
	callback: (message) => {
		let rolemap = message.guild.roles.cache
			.sort((a, b) => b.position - a.position)
			.map((r) => r)
			.join(',');
		if (rolemap.length > 1024) rolemap = 'To many roles to display';
		if (!rolemap) rolemap = 'No roles';
		const Embed = new Discord.MessageEmbed()
			.setColor('#03fc49')
			.addField('Role List', rolemap);
		message.reply(Embed);
	},
};
