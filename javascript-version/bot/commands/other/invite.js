const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	category: 'Other',
	aliases: ['add'],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: 'invite trickedbot to your server',
	callback: (message) => {
		const Embed = new Discord.MessageEmbed()
			.setColor(0x00ae86)
			.setTimestamp()
			.setTitle(`Click here to invite trickedbot to your server!`)
			.setURL(
				`https://discord.com/oauth2/authorize?client_id=748985087420399717&scope=bot&permissions=2146958847`
			);
		message.reply(Embed);
	},
};
