 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 const { no } = require("../../utils/util.js");
 module.exports = {
  cooldown: '2s',
  category: 'Points',
  aliases: ['give', 'send'],
  minArgs: 0,
  maxArgs: -1,

  expectedArgs: "", 
  description: 'Feeling nice?', 
  callback: async ({message, args, text, client}) => {
      let lucky = message.mentions.members.first()
      let author = message.author
    let bal =  client.userProfiles.get(author.id, 'points'); 
    if(`${lucky.id}` === `${author.id}`) {
no(message, "Sorry you cant share with yourself lel")
        return
    }
    if(!lucky) { // what happens if theres noone mentioned
no(message, "Thats not a user");
        return
}
let amounter = args[1] // coin amount
let amount = Number(amounter)
if (amount < 99 ){ // checking if the bank doesng go below 0
    no(message, "You cant share less than 100 points");
        return } 

if (isNaN(`${amount}`)) { // checking if its a amount of points
    no(message, "Thats not a number");
        return
  }

let bank = await client.userProfiles.get(author.id,'points');  // opening bank
let check = (bank - amount) // comparing the numbers

 if (check < 0){ // checking if the bank doesng go below 0
    no(message, `You cant give more points than you have you only have ${bank} points.`);;
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
      
