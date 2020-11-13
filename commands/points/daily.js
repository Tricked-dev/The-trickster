
const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
module.exports = {
    aliases: ['daily'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'Get your daily points', 
  callback: async (message, args, text, client, prefix, instance) => {
  let timeout = 86400000 // 24 hours in milliseconds, change if you'd like.
    let amount = 500
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let daily = await db.fetch(`daily_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
              const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`You already collected ur daily reward\n\nyou can come back and collect it in **${time.hours}h ${time.minutes}m ${time.seconds}s**!`) 
        .setColor('#FF0000')
        message.reply(Embed);
        return
    } else {
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Daily`, message.author.displayAvatarURL)
    .setColor("GREEN")
    .setDescription(`**Daily Reward**`)
    .addField(`Collected`, amount)

    message.channel.send(embed)
    db.add(`points_${message.author.id}`, amount)
    db.set(`daily_${message.author.id}`, Date.now())


  }
  }
}
