const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

module.exports = {
	category: 'Info',
	aliases: ['serverinfo'],
	minArgs: 0,
	maxArgs: -1,
	
	expectedArgs: '',
	description: 'serverinfo',
	callback: (message, args, text, client, prefix, instance) => {
		let yes = args[0];
		let embed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle('Server Info')
			.setImage(message.guild.iconURL)
			.setDescription(`${message.guild}'s information`)
			.addField('Owner', `The owner of this server is ${message.guild.owner}`)
			.addField(
				'Member Count',
				`This server has ${message.guild.memberCount} members`
			)
			.addField(
				'Emoji Count',
				`This server has ${message.guild.emojis.cache.size} emojis`
			)
			.addField(
				'Roles Count',
				`This server has ${message.guild.roles.cache.size} roles`
			)
			.addField(
				'Chanel Count',
				`This server has ${message.guild.channels.cache.size} channels`
			);

		message.channel.send(embed);
		if (!yes) return;
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
