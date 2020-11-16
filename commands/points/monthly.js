
const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
module.exports = {
    aliases: ['month'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'Get your monthly points', 
  callback: async (message, args, text, client, prefix, instance) => {
  let timeout = 2592000000 // 24 hours in milliseconds, change if you'd like.
  let amounts = 5000



    let monthly = await db.fetch(`monthly_${message.author.id}`);

    if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
        let time = ms(timeout - (Date.now() - monthly));
              const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`You already collected ur monthly reward\n\nyou can come back and collect it in **${time.hours}d ${time.hours}h ${time.minutes}m ${time.seconds}s**!`) 
        .setColor('#FF0000')
        message.reply(Embed);
        return
    } else {
      let bank = await db.fetch(`points_${message.author.id}`)
      let banker = (bank* 0.2)
      let amounter = (banker + amounts)
      let amount = amounter.toFixed(0)


    let embed = new Discord.MessageEmbed()
    .setAuthor(`Monthly`, message.author.displayAvatarURL)
    .setColor("GREEN")
    .setDescription(`**monthly Reward**`)
    .addField(`Collected`, amount + '\n\n(5000 + 20% intrest)')

    message.channel.send(embed)
    db.add(`points_${message.author.id}`, amount)
    db.set(`monthly_${message.author.id}`, Date.now())


  }
  }
}
