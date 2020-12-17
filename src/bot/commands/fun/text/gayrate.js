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
 syntaxError: "",
 expectedArgs: "", 
 description: 'Shows your real gayrate', 
 callback: async (message, args, text, client) => {
       let target = message.mentions.members.first() || message.author
        let gayrate = await client.userProfiles.get(target.id, 'gayrate')  
       if(!gayrate || gayrate == 0){
       const gayrate = Math.floor(Math.random() * 100) + 1;
       await client.userProfiles.set(target.id, gayrate, 'gayrate')
   }
       let rgayrate = await client.userProfiles.get(target.id, 'gayrate')  
       const iEmbed = new Discord.MessageEmbed()
       .setColor('#8E44AD')    
       .setTitle("gayrate Test")
       .setDescription(`${target}'s gayrate is: \`${rgayrate}\`%!`)
       message.channel.send(iEmbed)
   
       },
};