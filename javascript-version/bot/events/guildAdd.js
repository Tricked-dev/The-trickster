const Discord = require('discord.js');
const client = new Discord.Client();
const Enmap = require("enmap");

module.exports = (client, prefix, message, command) => {
    client.on('guildCreate', guild => {
        let content = ''
        console.log('╠═( Server Joined )════════════════════════════════════════════════════════════════════════════════╣')
        let spaces = 99 - (`║ server: ${guild} `).length
		content += `║ Server: ${guild}`
		for (i = 0; i < spaces; i++) { 
		  content += ' '
		}
		content += '║\n'
		let paces = 99 - (`║ Player: ${guild.owner.displayName} `).length
		content += `║ Player: ${guild.owner.displayName}`
		for (i = 0; i < paces; i++) { 
		  content += ' '
		}
		content += '║\n'
		let aces = 99 - (`║ People: ${guild.members.size}`).length
		content += `║ People: ${guild.members.size}`
		for (i = 0; i < aces; i++) { 
		  content += ' '
		}
		content += '║'
		console.log(content)
    })
}
module.exports.config = {
  displayName: 'guildAdd', // Can be changed any time
  dbName: 'new_servers', // Should be unique and NEVER be changed once set
  loadDBFirst: true,
}