     const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 module.exports = {
  cooldown: '2s',
  category: 'Points',
  aliases: [''],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: '', 
  callback: async (message, args, text, client) => {
    let goalitem = 'Dagger'
    let item = client.userProfiles.get(message.author.id, "items")
    if(!item.includes(goalitem)) {
        return message.reply('pp')
    }

}
 }