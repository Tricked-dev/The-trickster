
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
    if (message.member.hasPermission('ADMINISTRATOR') || message.author.id == 336465356304678913) {
    let key = Object.keys(client.guild.get(message.guild.id))
    bannednames = ['id', message.guild.id, 'guild', 'guildname', 'embed']
    key = key.length
    console.log(key)
    let name = args[0]
    if(name.includes(bannednames)) {
        message.reply('sorry those are banned names')
    } else if(key > 27) {
        message.reply('sorry you can only have a maximum of 25 tags if you need more tags please join the support server (!info) or message tricked#3777')
    } else {
    let input =  args.slice(1).join(' ')
    client.guild.set(message.guild.id, input, name);
    const Embed = new Discord.MessageEmbed()
    .setTitle('tag created/edited')
    .setDescription(input) 
    .setColor('#FF0000')
    message.reply(Embed);
    }

    } else {
            const Embed = new Discord.MessageEmbed()
            .setColor('#03fc49')
            .setTitle(`Sorry, you dont have the permission: 'ADMINISTRATOR' to execute this command`); c
        message.reply(Embed);
    }
  }
}