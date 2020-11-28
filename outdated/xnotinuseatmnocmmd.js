const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js'); 
const db = require('quick.db')
module.exports = {
aliases: [''],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "please mention somoene to trigger",
  expectedArgs: "please mention someone to trigger", 
  description: 'flip the coins', 
callback: async (message, args, text, client, prefix, instance) => {
let user = message.mentions.members.first()
let mamber = message.author
if(!user) {
  message.channel.send('Please mention someone')
  return
}
if(`${mamber.id}` === `${user.id}`) {
        const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`**Sharing with yourself smh**`) 
        .setColor('BLUE')
        message.reply(Embed);
        return
    }
let amount = args[1]
 if (isNaN(`${amount}`)) {
    const Embed = new Discord.MessageEmbed()
    .setColor('#03fc49')
        .setTitle('Points!')
        .setDescription(`**Thats not a number!**`)
        .setColor('BLUE')
        message.reply(Embed);
        return
  }
let bank = await db.fetch(`Points_${message.author.id}`)
let check = (bank - amount)

 if (check < 0){
    const Embed = new Discord.MessageEmbed()
    .setColor('#03fc49')
        .setTitle('Points!')
        .setDescription(`**You can not give more Points than you have, you only have ${bank} Points.**`)
        .setColor('BLUE')
        message.reply(Embed);
        return } 
await  db.add(`Points_${user.id}`, `${amount}`)
await  db.subtract(`Points_${message.author.id}`, `${amount}`)
let news = await db.fetch(`Points_${user.id}`)
const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('Points!')
        .setDescription(`**You gave ${user} ${amount} Points and they now have ${news} Points**`)
        .setColor('BLUE')
        message.reply(Embed);
        return 

}

}