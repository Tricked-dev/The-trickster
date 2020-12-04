 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 module.exports = {
  cooldown: '2s',
  aliases: [''],
  category: 'tricked',
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'Tricked only commands', 
  callback: async (message, args, text, client) => {
   if (message.author.id != 336465356304678913) {
         const Embed = new Discord.MessageEmbed() // talking
        .setTitle('points!')
        .setDescription(`**This is a command made for tricked and him only**`) 
        .setColor('BLUE')
        message.reply(Embed);
        return
    }


 let amounts = args[2];

 let amount =  parseInt(amounts)
 console.log(amount)
 let member = message.mentions.members.first()
 let bal = await client.userProfiles.get(member.id, 'points')  


 if(args[0] == 'set'){
        client.userProfiles.set(member.id, amount, 'points');
        const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**set ${member}'s balance to ${amount}**`)
        .setColor('BLUE')
        message.reply(Embed);
        return
    } else if (args[0] == 'give'){
      if (isNaN(`${amount}`)) { // checking if number
    const Embed = new Discord.MessageEmbed()
    .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**Thats not a number!**`) // if no number
        .setColor('BLUE')
        message.reply(Embed);
        return
  }     
        client.userProfiles.set(member.id, amount + bal, 'points');
        const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**added ${amount} to ${member}'s his balance is now ${amount + bal}**`)
        .setColor('BLUE')
        message.reply(Embed);
        
        return

    } else if (args[0] == 'add'){
      if (isNaN(`${amount}`)) { // checking if number
    const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setDescription(`**Thats not a number!**`) // if no number
        .setColor(member.displayHexColor || 'BLUE')
        .setFooter("Epicly made trickedbot")
        .setTimestamp()
        message.reply(Embed);
        return
  }  
        client.userProfiles.set(member.id, amount + bal, 'points');
        const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**added ${amount} to ${member}'s his balance is now ${amount + bal}**`)
        .setColor('BLUE')
        message.reply(Embed);
        return
}else if(args[0] == 'delete'){
        client.userProfiles.delete(member.id, 'points');
        const Embed = new Discord.MessageEmbed()
        .setTitle('points!')
        .setDescription(`**Removed ${member}**`)
        .setColor(member.displayHexColor || 'BLUE')
        .setFooter("Epicly made trickedbot")
        .setTimestamp()
        message.reply(Embed);
        return
} else if(args[0] == 'item'){
    let item = args.slice(2).join(' ')
    client.userProfiles.push(member.id, item, 'items');
        const Embed = new Discord.MessageEmbed()
        .setTitle('points!')
        .setDescription(`You have given ${member} a ${item}.\n hope they enjoy`)
        .setColor(member.displayHexColor || 'BLUE')
        .setFooter("Epicly made trickedbot")
        .setTimestamp()
        message.reply(Embed);
  }}}
