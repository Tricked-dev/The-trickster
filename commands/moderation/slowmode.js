const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	category: 'Moderation',
	aliases: [''],
	minArgs: 1,
	maxArgs: -1,
	syntaxError: 'plase enter a time in minutes',
	expectedArgs: 'please enter a time in minutes',
	description: 'changes slowmode on a channel',
	callback: (message, args, text, client, prefix, instance) => {
		if (message.member.hasPermission('MANAGE_CHANNELS')|| message.author.id == 336465356304678913) {
if (!args[0]) return message.channel.send('please include a number');
		let time = args[0];
		let times = time * 60;
		let reason = args.slice(1).join(' ');
		if (!reason) reason = 'No reason provided';
		async function slowmode() {
			await message.channel
				.setRateLimitPerUser(times)

				.catch((error) =>
					message.channel.send(
						`Sorry ${message.author} I couldn't execute because of : ${error}, message will still send but ignore it`
					)
				);

			const Embed = new Discord.MessageEmbed()
				.setColor(0x00ae86)
				.setTimestamp()
				.setAuthor(
					`slowmode has been set to ${args[0]} minutes reason: ${reason}`
				);
			message.reply(Embed).then((msg) => {
				msg.delete({ timeout: 5000 });
			});
		}
		slowmode();
return
		}
			   const Embed = new Discord.MessageEmbed()
      .setColor('#03fc49')
      .setTitle(`Error, you are not allowed to do this`)
    message.reply(Embed)
    return
		
	},
};
