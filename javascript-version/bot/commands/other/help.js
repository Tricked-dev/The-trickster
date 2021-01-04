const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	category: 'Other',
	aliases: [''],
	minArgs: 0,
	maxArgs: -1,
	
	expectedArgs: '',
	description: 'check yur connection',
	callback: ({message, args, text, client, prefix, instance}) => {
		message.author.send('List of all my commands https://skyblockdev.github.io/The-trickster/')
	},
};
