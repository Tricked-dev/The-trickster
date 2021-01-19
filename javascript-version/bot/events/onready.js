const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../files/config.json')
const {servers, presence} = require("../utils/util.js")
const chalk = require("chalk")
module.exports = (client) => {
		const { status, games, interval } = config.presence;
		presence(status, games, interval, client)

	async function startup() {
		console.log(chalk.blue('╠═( login )═══════════════════════════════════════════════════════════════════════════════════════╣'))
		console.log(chalk.blue("╠═( Amount's )════════════════════════════════════════════════════════════════════════════════════╣"))
		console.log(chalk.blue(`║ Trickedbot > Active in ${client.guilds.cache.size} servers!                                                              ║\n║ Trickedbot > ${client.users.cache.size} People, thats alot                                                             ║\n║ Trickedbot > ${client.channels.cache.size} different channels, thats alot                                                 ║`))
		console.log(chalk.blue('╠═( Servers )═════════════════════════════════════════════════════════════════════════════════════╣'))
		console.log(chalk.blue(servers(client)))
		
}   
	
	startup(); // ╚ ╝
};


module.exports.config = {
  displayName: 'onready',
  dbName: 'onready',
  loadDBFirst: true,
}