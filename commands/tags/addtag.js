
 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 module.exports = {
  cooldown: '2s',
  category: 'tags',
  aliases: ['createtag'],
  minArgs: 2,
  maxArgs: -1,
  syntaxError: "Please add a input",
  expectedArgs: "Please add a input", 
  description: 'add a tag', 
  callback: async (message, args, text, client) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#03fc49')
            .setTitle(`Sorry, you dont have the permission: 'ADMINISTRATOR' to execute this command`);
        message.reply(Embed);
        return;
    }

    let name = args[0]
    if(name == ['id', message.guild.id, 'guild', 'guildname']) {
        message.reply('sorry those are banned names')
    } else if(Object.keys(client.guild.get(message.guild.id)).size() > 25) {
        message.reply('sorry you can only have a maximum of 25 tags if you need more tags please join the support server (!info) or message tricked#3777')
    }
    let input =  args.slice(1).join(' ')
    client.guild.set(message.guild.id, input, name);
    const Embed = new Discord.MessageEmbed() 
    .setTitle('tag created/edited')
    .setDescription(input) 
    .setColor('#FF0000')
    message.reply(Embed);

  }
}