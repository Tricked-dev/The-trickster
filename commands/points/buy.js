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
  description: 'get your hourly Points', 
  callback: async (message, args, text, client, prefix, instance) => {
let item =  args.slice(0).join(' ').toLowerCase()
let bank = await db.fetch(`points_${message.author.id}`)

    if(item == 'dagger') { let check = (bank - '5000') ; if (check < 0){ const Embed = new Discord.MessageEmbed() .setColor('#03fc49') .setTitle('Points!') .setDescription(`**You dont have enough Points to buy that**`) .setColor('BLUE'); message.reply(Embed); return }
    db.subtract(`points_${message.author.id}`, '5000')    
    db.push(`${message.author.id}_items`, 'Dagger') }

    if(item == 'begginer') { let check = (bank - '5000') ; if (check < 0){ const Embed = new Discord.MessageEmbed() .setColor('#03fc49') .setTitle('Points!') .setDescription(`**You dont have enough Points to buy that**`) .setColor('BLUE'); message.reply(Embed); return }
    db.subtract(`points_${message.author.id}`, '5000')    
    db.push(`${message.author.id}_items`, ':beginner:') }

    if(item == 'ice cream') { let check = (bank - '300') ; if (check < 0){ const Embed = new Discord.MessageEmbed() .setColor('#03fc49') .setTitle('Points!') .setDescription(`**You dont have enough Points to buy that**`) .setColor('BLUE'); message.reply(Embed); return }
    db.subtract(`points_${message.author.id}`, '300')    
    db.push(`${message.author.id}_items`, ':ice_cream: ') }

    if(item == 'the investors gadget') { let check = (bank - '50000') ; if (check < 0){ const Embed = new Discord.MessageEmbed() .setColor('#03fc49') .setTitle('Points!') .setDescription(`**You dont have enough Points to buy that**`) .setColor('BLUE'); message.reply(Embed); return }
    db.subtract(`points_${message.author.id}`, '50000')    
    db.push(`${message.author.id}_items`, 'the investors gadget') }
    
    if(item == 'trickedbots soul') { let check = (bank - '500000') ; if (check < 0){ const Embed = new Discord.MessageEmbed() .setColor('#03fc49') .setTitle('Points!') .setDescription(`**You dont have enough Points to buy that**`) .setColor('BLUE'); message.reply(Embed); return }
    db.subtract(`points_${message.author.id}`, '500000')    
    db.push(`${message.author.id}_items`, 'trickedbots soul') 
}
    if(item == 'commedy award') { let check = (bank - '42069') ; if (check < 0){ const Embed = new Discord.MessageEmbed() .setColor('#03fc49') .setTitle('Points!') .setDescription(`**You dont have enough Points to buy that**`) .setColor('BLUE'); message.reply(Embed); return }
    db.subtract(`points_${message.author.id}`, '42069')    
    db.push(`${message.author.id}_items`, 'commedy award') 
}
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Daily`, message.author.displayAvatarURL)
    .setColor("GREEN")
    .setDescription(`You bought a ${item}.`)
    message.reply(embed)

    


 



  }
}