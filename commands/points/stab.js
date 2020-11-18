const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js'); 
const db = require('quick.db')
const ms = require("parse-ms");
module.exports = {
  aliases: [''],
  minArgs: 1,
  maxArgs: -1,
  syntaxError: "please mention someone to rob",
  expectedArgs: "please mention someone to rob", 
  description: 'Rob someone', 
  callback: async (message, args, text, client, prefix, instance) => {
 if(db.has(`${message.author.id}_items`, 'Dagger')) {
  let timeout = 300000 // 24 hours in milliseconds, change if you'd like.
let rob = await db.fetch(`rob_${message.author.id}`);

     if (rob !== null && timeout - (Date.now() - rob) > 0) {
        let time = ms(timeout - (Date.now() - rob));
              const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`You already robbed someone\n\nyou can come back and scam someone in **${time.hours}h ${time.minutes}m ${time.seconds}s**!`) 
        .setColor('#FF0000')
        message.reply(Embed);
        return
    } else {
   
            let user = message.mentions.members.first() || message.guild.members.get(args[0])
    if (!user) {
        return message.channel.send('Sorry, you forgot to mention somebody.')
    }
    let targetuser = await db.fetch(`points_${user.id}`) // fetch mentioned users balance
    let nums = (targetuser * 0.15)
    let num = nums.toFixed(0)
    let author = await db.fetch(`points_${message.author.id}`) // fetch authors balance
    if(`${targetuser}` === `${author}`) {
        const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`**Robbing yourself pothatic**`) 
        .setColor('BLUE')
        message.reply(Embed);
        return
    }

    if (author < num) { // if the authors balance is less than 250, return this.
        return message.channel.send(`:x: You need atleast ${num}$ to rob that user`)
    }

    if (targetuser < 50) { // if mentioned user has 0 or less, it will return this.
        return message.channel.send(`:x: ${user.user.username} does not have anything to rob.`)
    }


     const coin = [
    `0`,      
    `1`,
    `2`,
		];
  
    const index = Math.floor(
				Math.random() * (coin.length - 1) + 1
            );
    if(index == '2') {
        message.channel.send(`Your robbery failed and instead you lost ${num} point good job!`)
        db.subtract(`points_${message.author.id}`, num)
        db.add(`points_${user.id}`, num)
        db.set(`rob_${message.author.id}`, Date.now())
        return;
    }
    let cn = (`${targetuser}` / '3')
    let random = Math.floor(Math.random() * `${cn}`) + 1; // random number 200-1, you can change 200 to whatever you'd like


    const embed = new Discord.MessageEmbed()
    .setDescription(`${message.author} you robbed ${user} and got away with ${random}!`)
    .setColor("GREEN")
    .setTimestamp()
    message.channel.send(embed)
    let quest = db.get(`${message.author.id}_quests`)
    if(quest == 'rob'){
       db.set(`${message.author.id}_quests`, `1`) 
    }



    db.subtract(`points_${user.id}`, random)
    db.add(`points_${message.author.id}`, random)
    db.set(`rob_${message.author.id}`, Date.now())
    }    
} else {
        message.channel.send('you dont own this item')
    }

}
  }


