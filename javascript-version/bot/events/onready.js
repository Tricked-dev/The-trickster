const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../files/config.json')
module.exports = (client) => {
	    const { status, games, interval } = config.presence;

        // —— Set default presence
        games instanceof Array && games.length > 0 &&
            client.user.setPresence({
                status,
                activity: {
                    name: games[0].name ? games[0].name : null,
                    type: games[0].type ? games[0].type : null,
                    url : games[0].url  ? games[0].url  : null
                }
            });

		games instanceof Array && games.length > 1 &&
		
            setInterval(() => {

				const index = Math.floor(Math.random() * (games.length));
				
                client.user.setActivity(games[index].name, {
                    type: games[index].type,
                    url : games[index].url || "https://www.twitch.tv/"
                });
            }, ((typeof interval === "number" && interval) || 30) * 1000);



	async function startup() {
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
	}   
	console.log('╠═════════════════════════════════════════════════════════════════════════════════════════════════╣')
	startup(); // ╚ ╝
};
module.exports.config = {
  displayName: 'onready', // Can be changed any time
  dbName: 'onready', // Should be unique and NEVER be changed once set
  loadDBFirst: true,
}