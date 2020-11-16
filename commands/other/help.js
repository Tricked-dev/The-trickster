const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	aliases: ['h'],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: 'sends a basic help command',
	callback: (message) => {
		const Embeds = new Discord.MessageEmbed()
			.setColor('#000000')
			.setTitle('Command this bot can do (W.I.P)')
			.addFields(
				{ name: '\u200B', value: '\u200B' },
				{
					name: 'Moderation',
					value:
						'```ban | kick | delete | kick | mute | nick | nickreset | nuke | perms | server | slowmode | sudo | sudoz | type | unmute | uptime | userinfo | vc```',
					inline: false,
				},
				{
					name: 'Skyblock related',
					value: '```bank | bazaar | hypixel | names | profile | profiles```',
					inline: true,
				},
				{
					name: 'other',
					value:
						'```help | invite | ping | covid ```',
					inline: true,
				},
				{ name: 'Weeb', value: '```weeb | neko | w```', inline: true },
				{ name: 'Role commands', value: '```createrole | deleterole | delrole | getrole | getroleid | maxed-role | roleall | rolemap```', inline: true },
				{ name: 'fun', value: '```8BALL | avatar | bully | cat | cool | dog | facepalm | fortnite | gay | hitler | hug | jail | jokeoverhead | joh | kill | kiss | meme | search | shitass | triggered |```', inline: false },
				{ name: 'Points', value: '```bal | share | scam | rob | daily | hourly | gamble | monthly```', inline: false },
				{ name: 'config', value: '```commands | command | prefix | requiredrole```', inline: false },
				{
					
					name: '**For supposed questions and more join the discord.**',
					value: 'https://discord.gg/TAp9Kt2',
					inline: false,
				}
			);
		message.reply(Embeds);
	},
};
