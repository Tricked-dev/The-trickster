const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js'); 
const db = require('quick.db')
module.exports = {
  aliases: ['give', 'point'],
  minArgs: 2,
  maxArgs: -1,
  syntaxError: "!share",
  expectedArgs: "Please mention someone to share points to", 
  description: 'Give points', 
  callback: async (message, args, text, client, prefix, instance) => {
    let user = message.mentions.members.first()  // looking whos the lucky person
    let mamber = message.author
    if(`${mamber.id}` === `${user.id}`) {
        const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`**Sharing with yourself smh**`) 
        .setColor('BLUE')
        message.reply(Embed);
        return
    }
    if(!user) { // what happens if theres noone mentioned
   const Embed = new Discord.MessageEmbed() // talking
    .setColor('#03fc49')
        .setTitle('Points!')
        .setDescription(`**This is not a user!**`) 
        .setColor('BLUE')
        message.reply(Embed);
        return
}
let amount = args[1] // coin amount
 
if (amount > '99' ){ // checking if the bank doesng go below 0
    const Embed = new Discord.MessageEmbed()
    .setColor('#03fc49')
        .setTitle('Points!')
        .setDescription(`**Cant share less than 100points for reasons**`)
        .setColor('BLUE')
        message.reply(Embed);
        return } 

if (isNaN(`${amount}`)) { // checking if its a amount of points
    const Embed = new Discord.MessageEmbed()
    .setColor('#03fc49')
        .setTitle('Points!')
        .setDescription(`**Thats not a number!**`)
        .setColor('BLUE')
        message.reply(Embed);
        return
  }
let bank = await db.fetch(`points_${message.author.id}`)  // opening bank
if(!bank) {
  await  db.add(`points_${message.author.id}`, `20`)
}
let check = (bank - amount) // comparing the numbers

 if (check < 0){ // checking if the bank doesng go below 0
    const Embed = new Discord.MessageEmbed()
    .setColor('#03fc49')
        .setTitle('Points!')
        .setDescription(`**You can not give more points than you have, you only have ${bank} points.**`)
        .setColor('BLUE')
        message.reply(Embed);
        return } 
await  db.add(`points_${user.id}`, `${amount}`) // adding to mentioned guy
await  db.subtract(`points_${message.author.id}`, `${amount}`) // removing from user
let news = await db.fetch(`points_${user.id}`)
const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('Points!')
        .setDescription(`**You gave ${user} ${amount} points and they now have ${news} points**`)
        .setColor('BLUE')
        message.reply(Embed);
        if (980 < amount) {
       let quest = db.get(`${message.author.id}_quests`)
    if(quest == 'share'){
       db.set(`${message.author.id}_quests`, `1`) 
    }
  }
  return 
  }
    
    }
      
