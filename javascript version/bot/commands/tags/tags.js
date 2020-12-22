
 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 module.exports = {
  cooldown: '2s',
  category: 'tags',
  aliases: [''],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: '', 
  callback: async (message, args, text, client) => {


      let tags  = await client.guild.get(message.guild.id)
      let con = Object.keys(tags).toString().replace(/(\id,)/gm, "");
      let content = con.replace(/(\r\n|\n|\r|,)/gm, ", ");
      
    const Embed = new Discord.MessageEmbed() 
    .setTitle('tags')
    .setDescription(content) 
    .setColor('#FF0000')
    message.reply(Embed);
    
  }
}