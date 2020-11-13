const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js'); 
const db = require('quick.db')
module.exports = {
  aliases: ['give', 'share'],
  minArgs: 2,
  maxArgs: -1,
  syntaxError: "!share",
  expectedArgs: "Please mention someone to share points to", 
  description: 'Give points', 
  callback: async (message, args, text, client, prefix, instance) => {
   /*
   
   Start of non admin
   
   */
    if (message.author.id != 336465356304678913) { // checking if someone isnt me
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
 
if (amount < 0 ){ // checking if the bank doesng go below 0
    const Embed = new Discord.MessageEmbed()
    .setColor('#03fc49')
        .setTitle('Points!')
        .setDescription(`**Please gamble a min of 100points**`)
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
        return 
		}
    
      /*

start of admin

  */

    let user = message.mentions.members.first() || message.guild.members.get(args[0]); // checkig the mention
    let member = message.mentions.members.first() // idk this was needed 
    let reason = args.slice(1).join(' '); // looking for the amount
  if(!member) { // jebaited
    const Embed = new Discord.MessageEmbed()
				.setColor('#03fc49')
        .setTitle('Points!')
        .setDescription(`**You gave noone! ${reason} points! :scream: **`) //not pog
        .setColor('BLUE')
      message.reply(Embed);
      return;
  }

  if (isNaN(`${reason}`)) { // checking if number
    const Embed = new Discord.MessageEmbed()
    .setColor('#03fc49')
        .setTitle('Points!')
        .setDescription(`**Thats not a number!**`) // if no number
        .setColor('BLUE')
        message.reply(Embed);
        return
  }
 await  db.add(`points_${user.id}`, `${reason}`)     // giving the points
  let bank = await db.fetch(`points_${user.id}`) // making it fancy
  if (bank === null) bank = 0;      
  const Embed = new Discord.MessageEmbed()
      
        .setColor('#03fc49')
        .setTitle('Points!')
        .setDescription(`**You gave ${member} ${reason} Points they now have ${bank} points!**`) // worked
        .setColor('RED')
      message.reply(Embed);
       
    
    }
      }
