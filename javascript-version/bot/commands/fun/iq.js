 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 module.exports = {
  cooldown: '5s',
  category: 'Fun',
  aliases: [''],
  minArgs: 0,
  maxArgs: -1,

  expectedArgs: "", 
  description: 'Shows your real iq', 
  callback: async (message, args, text, client) => {
        let target = message.mentions.members.first() || message.author
         let iq = await client.userProfiles.get(target.id, 'iq')  
        if(!iq || iq == 0){
        const iq = Math.floor(Math.random() * 150) + 1;
        await client.userProfiles.set(target.id, iq, 'iq')
    }
        let riq = await client.userProfiles.get(target.id, 'iq')  
        const iEmbed = new Discord.MessageEmbed()
        .setColor('#8E44AD')    
        .setTitle("IQ Test")
        .setDescription(`${target}'s IQ is: \`${riq}\`!`)
        message.channel.send(iEmbed)
    
        },
};