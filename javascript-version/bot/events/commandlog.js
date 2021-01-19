const Enmap = require("enmap") 
 const Discord = require('discord.js');
module.exports = async (client,command, prefix) => {
client.on('message', async (message) => {
		if(message.guild === null) return
		let	content = '';
		if (!message.content.startsWith('!') || message.author.bot) return;
		console.log('╠═( Command used )════════════════════════════════════════════════════════════════════════════════╣')
		used = await client.userProfiles.get(message.author.id, 'commands');
		client.userProfiles.set(message.author.id, used + 1, 'commands');
		let spaces = 99 - (`║ server: ${message.guild} `).length
		content += `║ Server: ${message.guild}`
		for (i = 0; i < spaces; i++) { 
		  content += ' '
		}
		content += '║\n'
		let paces = 99 - (`║ Player: ${message.author.tag} `).length
		content += `║ Player: ${message.author.tag}`
		for (i = 0; i < paces; i++) { 
		  content += ' '
		}
		content += '║\n'
		let aces = 99 - (`║ command: ${message.content}`).length
		content += `║ Command: ${message.content.replace('!', '')}`
		for (i = 0; i < aces; i++) { 
		  content += ' '
		}
		content += '║'
		console.log(content)
		});
			
};
module.exports.config = {
  displayName: 'cmdlog', // Can be changed any time
  dbName: 'cmdlog', // Should be unique and NEVER be changed once set
  loadDBFirst: true,
}