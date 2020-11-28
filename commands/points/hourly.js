const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
module.exports = {
  category: 'Points',  
  aliases: ['hourly'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'get your hourly points', 
  callback: async (message, args, text, client, prefix, instance) => {
  let timeout = 3600000 // 1 hours in milliseconds, change if you'd like.
    let amount = 100
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let hourly = await db.fetch(`hourly_${message.author.id}`);

    if (hourly !== null && timeout - (Date.now() - hourly) > 0) {
        let time = ms(timeout - (Date.now() - hourly));
              const Embed = new Discord.MessageEmbed() // talking
        .setTitle('points!')
        .setDescription(`You already collected ur hourly reward\n\nyou can come back and collect it in **${time.hours}h ${time.minutes}m ${time.seconds}s**!`) 
        .setColor('#FF0000')
        message.reply(Embed);
        return
    } else {
    let embed = new Discord.MessageEmbed()
    .setAuthor(`hourly`, message.author.displayAvatarURL)
    .setColor("GREEN")
    .setDescription(`**Hourly Reward**`)
    .addField(`Collected`, amount)

    message.channel.send(embed)
    db.add(`points_${message.author.id}`, amount)
    db.set(`hourly_${message.author.id}`, Date.now())


  }
  }
}