const Discord = require('discord.js')
const client = new Discord.Client()
module.exports = {
  category: 'Moderation',
  aliases: [''],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "please mention someone and then add the nick",
  expectedArgs: "please mention someone and then add the nick", 
  description: 'change someones nick', 
   callback: (message, args, text, client, prefix, instance) => {
	const guild = client.guilds.cache.size
	let people = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)
    const Embed = new Discord.MessageEmbed()
            .setColor('#03fc49')
            .setThumbnail('https://cdn.discordapp.com/avatars/336465356304678913/99a99b8c0cfe6e7669e7474a16dbb566.webp?size=128')
            			.addFields(
				{ name: '\u200B', value: '\u200B' },
				{
					name: 'Bot info',
					value:
						'Node version `12.19.00`\nDiscord js version `12.5.1`\nPrefix: `'+ prefix + '`\nHelp command `' + prefix + 'help`\nOwner <@336465356304678913>',
					inline: false,
				},
				{
					name: 'Stats',
					value: 'Guilds: `' + guild + "`\nPeople: `" + people + "`\nCommands used since 28nov: `" + 'undefined' + '`',
					inline: true,
				},
				{
					name: 'links: ',
					value:
						'https://github.com/SkyBlockDev/Funbot\nhttps://discord.gg/TAp9Kt2\nhttps://www.youtube.com/channel/UC51x694Mps_rV6Kg2cKYZAQ?view_as=subscriber\nhttps://bots.discordlabs.org/bot/748985087420399717',
					inline: true,
				}
			);
message.reply(Embed)
   }
}