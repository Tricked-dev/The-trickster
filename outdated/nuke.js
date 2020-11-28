const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	aliases: ['delchannel'],
	minArgs: 1,
	maxArgs: -1,
	syntaxError: 'please enter the new name of the channel',
	expectedArgs: 'please enter the new name of the channel',
	description:
		'Command deletes a whole channel and places a new one with the name you choose note it might not be on the right place.',
	callback: (message, args, text, client, prefix, instance) => {
		if (message.member.hasPermission('MANAGE_CHANNELS') || message.author.id == 336465356304678913) {
			let name = args[0];
		let pos = message.channel.position;
		message.author.send(
			`Deleted the channel and replaced it with ${args[0]}. \nChannel might need moving.`
		);
		message.guild.channels
			.create(name, {
				type: 'text',
			})
			.then((channel) => {
				const categoryId = message.channel.parent.id;
				channel.setParent(categoryId);
				channel.setPosition(pos);
			});

		message.channel.delete();	
		return
		}
	
		const Embed = new Discord.MessageEmbed()
				.setColor('#03fc49')
				.setTitle(`Error, you are not allowed to do this`);
			message.reply(Embed);
			return;
	},
};
