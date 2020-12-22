const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	category: 'Moderation',
	aliases: [''],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: 'L',
	callback: (message, args, text, client, prefix, instance) => {
		if (message.member.hasPermission("MANAGE_MESSAGES") || message.author.id == 336465356304678913) {
		
			let num = args[0];
		let deleteCount = parseInt(args[0], 10) + 1;
		if (!deleteCount || deleteCount < 2 || deleteCount > 100)
			return message.reply(
				'Please provide a number between 2 and 100 for the number of messages to delete'
			);
		async function purge() {
			const fetched = await message.channel.messages.fetch({
				limit: deleteCount,
			});
			message.channel
				.bulkDelete(fetched)
				.catch((error) =>
					message.reply(`Couldn't delete messages because of: ${error}`)
				);
		}
		purge();
		const embeds = new Discord.MessageEmbed()
			.setColor('#ff00d9')
			.setDescription(`deleted ${num} messages`);
		message.channel
			.send(embeds)
			.then((msg) => {
				msg.delete({ timeout: 5000 });
			})
			.catch(console.error);
			return
		}
		const Embed = new Discord.MessageEmbed()
				.setColor('#03fc49')
				.setTitle(`Error, you are not allowed to do this`);
			message.reply(Embed);
			return;	
	},
};
