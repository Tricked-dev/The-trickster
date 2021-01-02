const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	aliases: ['oval'],
	minArgs: 0,
	category: 'hidden',
	maxArgs: -1,
	
	expectedArgs: '',
	description: 'eval tricked only command /shrug',
	callback: (message, args, text, client, prefix, instance) => {
		const input = args.join(' ');
		if (message.author.id == 336465356304678913) {
		} else {
			const Embed = new Discord.MessageEmbed().setTitle(
				`Haha bad you arent tricked LLLL`
			);
			message.reply(Embed);
			return;
		}

		try {
			eval(input);
		} catch (err) {
			const Embed = new Discord.MessageEmbed()
				.setFooter(`Time taken ${client.ws.ping}ms`)
				.addField('Tested', `\`\`\`${input}\`\`\``)
				.addField('Failed Output', `\`\`\`${err}\`\`\``)
			message.reply(Embed);
		} finally {
			const Embed = new Discord.MessageEmbed()
				.setFooter(`Time taken ${client.ws.ping}ms`)
				.addField('Tested', `\`\`\`js\n${input}\n\`\`\``)
				.addField('Output', `\`\`\`js\n${eval(input)}\n\`\`\``)
			message.reply(Embed);
		}
	},
};
