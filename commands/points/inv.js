 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 module.exports = {
  cooldown: '2s',
  category: 'Points',
  aliases: ['inventory'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'Do you got dagger?', 
  callback: async (message, args, text, client) => {
    let member = message.mentions.members.first() || message.author
    let item = client.userProfiles.get(member.id, 'items');
        const Embed = new Discord.MessageEmbed() // talking
        .setTitle(member.username + "'s inventory")
        .setDescription(item)
        .setColor('#FF0000')
        .setImage('https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif')
        message.reply(Embed);

  }
}