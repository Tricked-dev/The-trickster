
 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 module.exports = {
  cooldown: '2s',
  category: 'tags',
  description: "shows a tag",
  aliases: [''],
  minArgs: 0,
  maxArgs: -1,
  expectedArgs: "", 
  callback: async (message, args, text, client) => {
    if(!client.guild.get(message.guild.id, args[0]) || args[0] == 'id'){
      message.reply('tag not found, you can create on by typing !addtag/!createtag')
    }
    output = client.guild.get(message.guild.id, args[0]);
    const Embed = new Discord.MessageEmbed() 
    .setTitle(args[0])
    .setDescription(output) 
    .setColor('#FF0000')
    message.reply(Embed);
  }
}