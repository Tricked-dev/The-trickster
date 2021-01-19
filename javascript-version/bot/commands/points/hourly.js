 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 const { no, add, sub } = require("../../utils/util.js");
  module.exports = {
  cooldown: '1h',
  category: 'Points',
  aliases: [''],
  minArgs: 0,
  maxArgs: -1,

  expectedArgs: "", 
  description: 'Free points', 
  callback: async ({message, args, text, client}) => {
  let amount = 100
  add(message.author.id, amount)

    let embed = new Discord.MessageEmbed()
    .setAuthor(`hourly`, message.author.displayAvatarURL)
    .setColor("GREEN")
    .setDescription(`**Hourly Reward**`)
    .addField(`Collected`, amount)
    message.channel.send(embed)
  }
}