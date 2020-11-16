    const Discord = require('discord.js');
const client = new Discord.Client();    
module.exports = {
	aliases: ['add'],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: 'invite trickedbot to your server',
	callback: (message) => {
        const Embed = new Discord.MessageEmbed()
						.setColor('#0000ff')
                        .setTitle(`voting`)
                        .setDescription('You can vote here for top.gg on the server https://top.gg/servers/748956745409232945/vote\n\nand type !d bump in #bots every 2 hours to support it\n\nThank you!')
					message.reply(Embed);
    }
}