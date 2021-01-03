 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 module.exports = {
  cooldown: '2s',
  category: 'Points',
  aliases: ['lb', 'leaderboard'],
  minArgs: 0,
  maxArgs: -1,

  expectedArgs: "", 
  description: 'Show the leaderboard', 
  callback: async (message, args, text, client) => {
 
const users = client.userProfiles.array();
const sorted = users.sort((a, b) => ((1 + b.points) - (1 + a.points)));
const top10 = sorted.splice(0, 10);
let num = 0
let content = ""
  for(const data of top10) {
    try {
      embed.addField(client.users.cache.get(data.sorted).tag, `${data.points} points`);
    } catch {
      num += 1
       content += `${num}. points - ${data.points}\n`
    }
  }
  const embed = new Discord.MessageEmbed()
    .setTitle("top 10 anonymous leaderboard")
    .setDescription(`\`\`\`js\n${content}\n\`\`\``)
    .setColor(0x00AE86);
  return message.channel.send({embed});
}
  

  }