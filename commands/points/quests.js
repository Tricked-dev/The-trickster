 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 module.exports = {
  cooldown: '2s',
  category: 'Points',
  aliases: ['quest', 'challange'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'Do some quests (not properly tested)', 
  callback: async (message, args, text, client) => {
    const member = message.author


    let quest = await client.userProfiles.get(member.id, 'quest');

if(quest == 'rob') {
       const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Rob Quest')
        .setDescription(`**Rob a guy to finish this quest.**`) 
        .setColor('#FF0000')
        message.reply(Embed);
    return
}else if(quest == 'gamble'){
    const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`**gamble 1k Points at once to finish this quest**`) 
        .setColor('#FF0000')
        message.reply(Embed);
return
}else if(quest == 'share') {
      const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`**Share 1k Points at once to complete this quest**`) 
        .setColor('#FF0000')
        message.reply(Embed);
    return
}else if(quest == '1'){
                 const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`**earned 1k from your quest**`) 
        .setColor('#FF0000')
        message.reply(Embed);
    let bal = await client.userProfiles.get(member.id, 'points');
    await client.userProfiles.set(member.id, bal + 1000, 'points');
    await client.userProfiles.delete(member.id, 'quest');
    
let mins = Math.ceil(1);
    let maxs = Math.floor(4); 
    const index = Math.floor(
				Math.floor(Math.random() * (maxs - mins) + mins)
            );
            

console.log(index)

if(index == '1'){
        await client.userProfiles.set(member.id, 'rob', 'quest');
             const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Rob Quest')
        .setDescription(`**Rob a guy to finish this quest.**`) 
        .setColor('#FF0000')
        message.reply(Embed);
}else if(index == '2'){
        await client.userProfiles.set(member.id, 'gamble', 'quest');
             const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`**gamble 1k Points at once to finish this quest**`) 
        .setColor('#FF0000')
        message.reply(Embed);
}else if(index == '3'){
        await client.userProfiles.set(member.id, 'share', 'quest');
             const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`**Share 1k Points at once to complete this quest**`) 
        .setColor('#FF0000')
        message.reply(Embed);
}
    
    
    return
}else {

      let mins = Math.ceil(1);
    let maxs = Math.floor(4); 
    const index = Math.floor(
				Math.floor(Math.random() * (maxs - mins) + mins)
            );
            

console.log(index)

if(index == '1'){
        await client.userProfiles.set(member.id, 'rob', 'quest'); 
             const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Rob Quest')
        .setDescription(`**Rob a guy to finish this quest.**`) 
        .setColor('#FF0000')
        message.reply(Embed);
}else if(index == '2'){
        await client.userProfiles.set(member.id, 'gamble', 'quest');
             const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`**gamble 1k Points at once to finish this quest**`) 
        .setColor('#FF0000')
        message.reply(Embed);
}else if(index == '3'){
        await client.userProfiles.set(member.id, 'share', 'quest');
             const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`**Share 1k Points at once to complete this quest**`) 
        .setColor('#FF0000')
        message.reply(Embed);
}
    
}

  }
}