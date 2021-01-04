const Discord = require('discord.js')
const client = new Discord.Client()
module.exports = {
  category: 'Info',
  aliases: [''],
  minArgs: 0,
  maxArgs: -1,
  expectedArgs: "please mention someone and then add the nick", 
  description: 'change someones nick', 
   callback: ({message, args, text, client, prefix, instance}) => {
	const guild = client.guilds.cache.size
	let people = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)
	const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
	arr.reverse();
	arr2 = []
	const used = process.memoryUsage();
	for (let key in used) {
	arr2.push (Math.round(used[key] / 1024 / 1024 * 100) / 100)
	}
    const Embed = new Discord.MessageEmbed()
            .setColor('#03fc49')
            .setThumbnail('https://cdn.discordapp.com/avatars/336465356304678913/99a99b8c0cfe6e7669e7474a16dbb566.webp?size=128')
            			.addFields(
				{ name: '\u200B', value: '\u200B' },
				{
					name: 'Bot info',
					value:
						'Node version `12.20.00`\nDiscord js version `12.5.1`\nCommand handler: `WOKcommandhandler`\nOS: `Ubuntu Server` \nPrefix: `'+ prefix + '`\nHelp command `' + prefix + 'help`\nOwner <@336465356304678913>\n Memory used: `' + arr2[3] + '`',
					inline: false,
				},
				{// Trickedbot > Active in ${client.guilds.cache.size} servers! Trickedbot > ${client.users.cache.size} People, thats alot║\n║ Trickedbot > ${client.channels.cache.size} different channels, thats alot ║`)
					name: 'Stats',
					value: 'Guilds: `' + guild + "`\nPeople: `" + people + "\n`Channels: `" + client.channels.cache.size + '`',
					inline: false,
				},
				{
					name: 'links: ',
					value:
						'https://discord.gg/TAp9Kt2\nhttps://www.youtube.com/channel/UC51x694Mps_rV6Kg2cKYZAQ?view_as=subscriber\nhttps://bots.discordlabs.org/bot/748985087420399717',
					inline: false,
				}
			);
message.reply(Embed)
   }
}