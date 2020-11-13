 const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js'); 
const db = require('quick.db')
module.exports = {
  aliases: ['leaderboard', 'rich', 'lb', 'lb3'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'Shows the leaderboard of points', 
  callback: async (message, args, text, client, prefix, instance) => {
 let all = db.all().filter(d => d.ID.startsWith("points_")).sort((a, b) => b.data - a.data)
    let content = "";
    all.forEach(a => {
        
        let who = message.guild.members.cache.get(a.ID.split("_")[1])
        
        if (who) {
            content += `${who.user.username} - ${a.data}\n`;
        } 
    })
    let embed = new Discord.MessageEmbed()
        .setTitle(`${message.guild.name}'s point leaderboard`)
        .setDescription(`\`\`\`${content}\n\`\`\``)
        .setColor('GREEN')
        .setTimestamp()

    message.channel.send(embed)
}
}