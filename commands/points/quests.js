const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
module.exports = {
    aliases: ['quest'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'quests', 
  callback: async (message, args, text, client, prefix, instance) => {
let quest = db.get(`${message.author.id}_quests`)


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
        .setDescription(`**gamble 1k points at once to finish this quest**`) 
        .setColor('#FF0000')
        message.reply(Embed);
return
}else if(quest == 'share') {
      const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`**Share 1k points at once to complete this quest**`) 
        .setColor('#FF0000')
        message.reply(Embed);
    return
}else if(quest == '1'){
                 const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`**earned 1k from your quest**`) 
        .setColor('#FF0000')
        message.reply(Embed);
    db.add(`points_${message.author.id}`, `1000`)
    db.delete(`${message.author.id}_quests`)
    
          let mins = Math.ceil(1);
    let maxs = Math.floor(4); 
    const index = Math.floor(
				Math.floor(Math.random() * (maxs - mins) + mins)
            );
            

console.log(index)

if(index == '1'){
        db.set(`${message.author.id}_quests`, `rob`) 
             const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Rob Quest')
        .setDescription(`**Rob a guy to finish this quest.**`) 
        .setColor('#FF0000')
        message.reply(Embed);
}else if(index == '2'){
        db.set(`${message.author.id}_quests`, `gamble`) 
             const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`**gamble 1k points at once to finish this quest**`) 
        .setColor('#FF0000')
        message.reply(Embed);
}else if(index == '3'){
        db.set(`${message.author.id}_quests`, `share`) 
             const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`**Share 1k points at once to complete this quest**`) 
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
        db.set(`${message.author.id}_quests`, `rob`) 
             const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Rob Quest')
        .setDescription(`**Rob a guy to finish this quest.**`) 
        .setColor('#FF0000')
        message.reply(Embed);
}else if(index == '2'){
        db.set(`${message.author.id}_quests`, `gamble`) 
             const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`**gamble 1k points at once to finish this quest**`) 
        .setColor('#FF0000')
        message.reply(Embed);
}else if(index == '3'){
        db.set(`${message.author.id}_quests`, `share`) 
             const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`**Share 1k points at once to complete this quest**`) 
        .setColor('#FF0000')
        message.reply(Embed);
}
    
}

  }
}