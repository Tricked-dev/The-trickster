 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 const { no, add, sub, presence,  servers, commafy} = require("../../utils/util.js");
 module.exports = {
  cooldown: '5s',
  category: 'Points',
  aliases: [''],
  minArgs: 0,
  maxArgs: -1,

  expectedArgs: "", 
  description: 'everyone loves free points dont they', 
  callback: async ({message, args, text, client}) => {
  let timeout = 2592000000
  let amounts = 5000



    const target = message.author


    let monthly = await client.userProfiles.get(target.id, 'monthly');
    if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
        let time = ms(timeout - (Date.now() - monthly));
        const Embed = new Discord.MessageEmbed() // talking
        .setTitle('points!')
        .setDescription(`You already collected ur monthly reward\n\nyou can come back and collect it in **${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s**!`) 
        .setColor('#FF0000')
        message.reply(Embed);
        return
    } else { 
point = await client.userProfiles.get(target.id, 'points');
        let points = (point)
        let banker = (points* 0.20)
        let amounter = parseInt(banker + amounts)
        let amount = amounter
        let banks = parseInt(amount + points)
        
   
    client.userProfiles.set(target.id, Date.now(), 'monthly');
    client.userProfiles.set(target.id, banks,'points');
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Monthly`, message.author.displayAvatarURL)
    .setColor("GREEN")
    .setDescription(`**Monthly Reward**`)
    .addField(`Collected`, commafy(amount) + '\n\n(5000 + 20% intrest)')
    message.channel.send(embed)
    }
  }
}
