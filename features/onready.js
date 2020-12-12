const Discord = require('discord.js');
const { forEach } = require('wokcommands/permissions');
const client = new Discord.Client();
module.exports = (client) => {
	client.user.setPresence({ activity: { name: '' }, status: 'offline' })
	async function startup() {
		const activities_list = [
			'With My Self',
			'Ur Messages',
			`${client.guilds.cache.size} Servers`,
			'Music',
			'to your commands',
			'Fartnite',
			'bot Things',
			'anime',
		];
		const type_list = [
			'PLAYING',
			'WATCHING',
			'WATCHING',
			'LISTENING',
			'LISTENING',
			'PLAYING',
			'PLAYING',
			'WATCHING',
		];
		setInterval(() => {
			const index = Math.floor(
				Math.random() * (activities_list.length - 1) + 1
			);
			client.user.setActivity(activities_list[index], {
				type: type_list[index],
			});
		}, 10000);
		console.log('╠═( login )═══════════════════════════════════════════════════════════════════════════════════════╣')
		console.log(`║ Trickedbot > Logged in as ${client.user.tag}!                                                   ║`);
		console.log("╠═( Amount's )════════════════════════════════════════════════════════════════════════════════════╣")
		console.log(`║ Trickedbot > Active in ${client.guilds.cache.size} servers!                                                              ║\n║ Trickedbot > ${client.users.cache.size} People, thats alot                                                              ║\n║ Trickedbot > ${client.channels.cache.size} different channels, thats alot                                                 ║`)
		console.log('╠═( Servers )═════════════════════════════════════════════════════════════════════════════════════╣')
		let content = "";
		let s = "";
    	client.guilds.cache.forEach((guild) => {
			let spaces = 98 - (`║ ⋙  ${guild.name} member's ${guild.memberCount}`).length
			s += 1
			if(s > Number(client.guilds.cache.size)-2){
				content += `\n║`

			} else {
				content += '║'
			}
			content += ` ⋙  ${guild.name} member's ${guild.memberCount}`

			for (i = 0; i < spaces; i++) { 
  			content += ' '
			}
						content += '║'
    })
		console.log(content)
		console.log('╠═( Commands used )═══════════════════════════════════════════════════════════════════════════════╣')
	}
	startup(); // ╚ ╝
};
