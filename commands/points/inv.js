const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
module.exports = {
  category: 'Points',  
  aliases: ['inventory'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'get your hourly Points', 
  callback: async (message, args, text, client, prefix, instance) => {
   let item =   db.get(`${message.author.id}_items`)

             const Embed = new Discord.MessageEmbed() // talking
        .setTitle(message.author.username + 's inventory')
        .setDescription(item) 
        .setColor('#FF0000')
        message.reply(Embed);

  }
}