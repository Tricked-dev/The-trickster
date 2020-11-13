const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js'); 
const db = require('quick.db')
module.exports = {
aliases: ['cf'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "please mention somoene to trigger",
  expectedArgs: "please mention someone to trigger", 
  description: 'flip the coins', 
callback: (message, args, text, client, prefix, instance) => {
  const coin = [
    `nothing`,      
    `heads`,
    `tails`,
		];
  
    const index = Math.floor(
				Math.random() * (coin.length - 1) + 1
            );

            let result = (coin[index])
            const Embed = new Discord.MessageEmbed()
				.setColor('#011f4b')
				.setTitle(`Coin flip :eyes:`)
				.setDescription(
					`The coin was flipped and the result is **${result}**`
				);
			message.reply(Embed);
}
}