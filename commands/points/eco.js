const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
module.exports = {
  aliases: ['ec'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: '', 
  callback: async (message, args, text, client, prefix, instance) => {
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
 var member = message.mentions.members.first() || message.guild.members.cache.find(member => member.user.username === args.join(" ")) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.displayName === args.join(" "))


 if(args[0] == 'set'){
        db.set(`points_${message.author.id}`, amount)
        let news = await db.fetch(`points_${member.id}`)
        const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**set ${member}'s balance to ${news}**`)
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
  if (amount < 0 ){ // checking if the bank doesng go below 0
    const Embed = new Discord.MessageEmbed()
    .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**Try using remove instead**`)
        .setColor('BLUE')
        message.reply(Embed);
        return }  
    db.add(`points_${member.id}`, amount)
        let news = await db.fetch(`points_${member.id}`)
        const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**added ${amount} to ${member}'s his balance is now ${news}**`)
        .setColor('BLUE')
        message.reply(Embed);
        
        return

    } else if (args[0] == 'add'){
      if (isNaN(`${amount}`)) { // checking if number
    const Embed = new Discord.MessageEmbed()
    .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**Thats not a number!**`) // if no number
        .setColor('BLUE')
        message.reply(Embed);
        return
  }   
  if (amount < 0 ){ // checking if the bank doesng go below 0
    const Embed = new Discord.MessageEmbed()
    .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**Try using remove instead**`)
        .setColor('BLUE')
        message.reply(Embed);
        return }  
    db.add(`points_${member.id}`, amount)
        let news = await db.fetch(`points_${member.id}`)
        const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**added ${amount} to ${member}'s his balance is now ${news}**`)
        .setColor('BLUE')
        message.reply(Embed);
        
        return
}else if(args[0] == 'remove'){
        db.subtract(`points_${member.id}`, amount)
        let news = await db.fetch(`points_${member.id}`)
        const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**removed ${amount} from ${member}'s his balance is now ${news}**`)
        .setColor('BLUE')
        message.reply(Embed);
        return
}else if(args[0] == 'delete'){
        db.delete(`points_${member.id}`)
        const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**remoced ${member} banka acc**`)
        .setColor('BLUE')
        message.reply(Embed);
        return
} else if(args[0] == 'table'){
      db.delete(args[1])
        const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**Deleted the table**`)
        .setColor('BLUE')
        message.reply(Embed);
}
  }}
