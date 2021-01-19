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
		const Embed = new Discord.MessageEmbed()
			.setColor(0x00ae86)
			.setTimestamp()
			.setTitle(`List of all my commands can be found here`)
			.setURL(
				`https://skyblockdev.github.io/The-trickster/`
			);
		
		message.author.send(Embed)
		message.reply("You have got mail!")
	},
};
