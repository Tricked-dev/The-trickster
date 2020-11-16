const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js'); 
const { max } = require('mathjs');
const db = require('quick.db')
const talkedRecently = new Set();
module.exports = (client) => {

	client.on('message', (message) => {
		if (!message.content.startsWith('!') || message.author.bot) return;
		let indexer = `Trickedbot > in server: ${message.guild}, ${message.author.tag} used ${message.content}`
		console.log(
			`${indexer},`
		);
		db.add('commands', '1')
		db.push(`commander`, indexer)


		




		  let mins = Math.ceil(1);
    let maxs = Math.floor(200); 
    const index = Math.floor(
				Math.floor(Math.random() * (maxs - mins) + mins)
            );
			if(index == '25'){
	const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('Points!')
        .setTitle(`Giveaway in this server (40K POINTS!)`)
			.setURL(
				`https://discord.gg/tEPyZcSQrh`
			)
        .setColor('PURPLE')
	  message.reply(Embed);
}

	});
};
