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
 description: 'Shows your real gamerrate', 
 callback: async (message, args, text, client) => {
       let target = message.mentions.members.first() || message.author
        let gamerrate = await client.userProfiles.get(target.id, 'gamerrate')  
       if(!gamerrate || gamerrate == 0){
       const gamerrate = Math.floor(Math.random() * 100) + 1;
       await client.userProfiles.set(target.id, gamerrate, 'gamerrate')
   }
       let rgamerrate = await client.userProfiles.get(target.id, 'gamerrate')  
       const iEmbed = new Discord.MessageEmbed()
       .setColor('#8E44AD')    
       .setTitle("gamerrate Test")
       .setDescription(`${target}'s gamerrate is: \`${rgamerrate}\`%!`)
       message.channel.send(iEmbed)
   
       },
};