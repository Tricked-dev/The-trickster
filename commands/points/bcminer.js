const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js'); 
const ms = require("parse-ms");
const db = require('quick.db')
module.exports = {
  aliases: ['btcminer', 'btminer'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'Shows the leaderboard of points', 
  callback: async (message, args, text, client, prefix, instance) => {
if(message.author.bot) return;


  let min = Math.ceil(1);
    let max = Math.floor(100); 
    const indexer = Math.floor(
				Math.floor(Math.random() * (max - min) + min)
            );

  let mins = Math.ceil(1);
    let maxs = Math.floor(200); 
    const index = Math.floor(
				Math.floor(Math.random() * (maxs - mins) + mins)
            );

let answer = (indexer + index)


if (message.author.id == 336465356304678913 ||message.author.id == 373879943781679104 ) {
   message.author.send(answer)
}
 
const filter = m => m.author.id === message.author.id;
message.channel.send(`what is ${indexer} + ${index}`)
message.channel.awaitMessages(filter, {
	max: 1, 
	time: 10000, 
	errors: ['time'] 
}).then(async(collected) => {
	if (collected.first().content.toLowerCase() == `${answer}`) { 
        message.reply("Great work you mined those bitcoins ill give you 150 points") 
        db.add(`points_${message.author.id}`, '150')
    }
    }).catch(() => {
	message.reply("You took too long!")
})
}
}
  
