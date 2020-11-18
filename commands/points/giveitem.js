
const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
module.exports = {
    aliases: ['ec'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'get your hourly points', 
  callback: async (message, args, text, client, prefix, instance) => {
   if (message.author.id != 336465356304678913) {
         const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`**This is a command made for tricked and him only**`) 
        .setColor('BLUE')
        message.reply(Embed);
        return
    }
     let member = message.mentions.members.first()
    let reason = args.slice(1).join(' ');db.push(`${member.id}_items`, reason)

  }
}