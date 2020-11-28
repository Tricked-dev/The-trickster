const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js'); 
const db = require('quick.db')
module.exports = {
  aliases: ['usrdl'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "please mention somoene to trigger",
  expectedArgs: "please mention someone to trigger", 
  description: 'deletes a user\'s poinnts trickedonly', 
  callback: async (message, args, text, client, prefix, instance) => {
 let user = message.mentions.members.first()
    if (message.author.id != 336465356304678913) {
         const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`**This is a command made for tricked and him only**`) 
        .setColor('BLUE')
        message.reply(Embed);
        return
    }
db.set(`Points_${user}`, '1') 
db.delete(`Points_${user}`)

  }}