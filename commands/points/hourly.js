 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 module.exports = {
  cooldown: '1h',
  category: 'Points',
  aliases: [''],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'Free points', 
  callback: async (message, args, text, client) => {
  let amount = 100
  let member = message.author 
  let bal = client.userProfiles.get(member.id, 'points'); 
  client.userProfiles.set(member.id, bal + amount, 'points'); 

    let embed = new Discord.MessageEmbed()
    .setAuthor(`hourly`, message.author.displayAvatarURL)
    .setColor("GREEN")
    .setDescription(`**Hourly Reward**`)
    .addField(`Collected`, amount)
    message.channel.send(embed)
  }
}