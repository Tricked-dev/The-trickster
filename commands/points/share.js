 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 module.exports = {
  cooldown: '2s',
  category: 'Points',
  aliases: ['give', 'send'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'Feeling nice?', 
  callback: async (message, args, text, client) => {
      let lucky = message.mentions.members.first()
      let author = message.author
    let bal =  client.userProfiles.get(author.id, 'points'); 
    if(`${lucky.id}` === `${author.id}`) {
        const Embed = new Discord.MessageEmbed() // talking
        .setTitle('points!')
        .setDescription(`**Sharing with yourself smh**`) 
        .setColor('BLUE')
        message.reply(Embed);
        return
    }
    if(!lucky) { // what happens if theres noone mentioned
   const Embed = new Discord.MessageEmbed() // talking
    .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**This is not a user!**`) 
        .setColor('BLUE')
        message.reply(Embed);
        return
}
let amounter = args[1] // coin amount
let amount = Number(amounter)
if (amount < 99 ){ // checking if the bank doesng go below 0
    const Embed = new Discord.MessageEmbed()
    .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**Cant share less than 100points for reasons**`)
        .setColor('BLUE')
        message.reply(Embed);
        return } 

if (isNaN(`${amount}`)) { // checking if its a amount of points
    const Embed = new Discord.MessageEmbed()
    .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**Thats not a number!**`)
        .setColor('BLUE')
        message.reply(Embed);
        return
  }

let bank = await client.userProfiles.get(author.id,'points');  // opening bank
let check = (bank - amount) // comparing the numbers

 if (check < 0){ // checking if the bank doesng go below 0
    const Embed = new Discord.MessageEmbed()
    .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**You can not give more points than you have, you only have ${bank} points.**`)
        .setColor('BLUE')
        message.reply(Embed);
        return }
    client.userProfiles.math(lucky.id, "+", amount, "points");
    client.userProfiles.math(author.id, "-", amount, "points");
let news = await client.userProfiles.get(lucky.id, 'points');
const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**You gave ${lucky} ${amount} points and they now have ${news} points**`)
        .setColor('BLUE')
        message.reply(Embed);
        if (980 < amount) {
       let quest =  client.userProfiles.get(author.id, 'quest'); 
    if(quest == 'share'){
       client.userProfiles.set(author.id, 1, 'quest');
    } 
  }
  return 
  }
    
    }
      
