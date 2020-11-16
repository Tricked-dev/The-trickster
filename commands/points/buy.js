const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
module.exports = {
    aliases: ['hourly'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'get your hourly points', 
  callback: async (message, args, text, client, prefix, instance) => {
let item =  args.slice(0).join(' ').toLowerCase()
let bank = await db.fetch(`points_${message.author.id}`)

    if(item == 'dagger') { let check = (bank - '5000') ; if (check < 0){ const Embed = new Discord.MessageEmbed() .setColor('#03fc49') .setTitle('Points!') .setDescription(`**You dont have enough points to buy that**`) .setColor('BLUE'); message.reply(Embed); return }
    db.subtract(`points_${message.author.id}`, '5000')    
    db.push(`${message.author.id}_items`, 'Dagger') }

    if(item == 'the investors gadget') { let check = (bank - '50000') ; if (check < 0){ const Embed = new Discord.MessageEmbed() .setColor('#03fc49') .setTitle('Points!') .setDescription(`**You dont have enough points to buy that**`) .setColor('BLUE'); message.reply(Embed); return }
    db.subtract(`points_${message.author.id}`, '50000')    
    db.push(`${message.author.id}_items`, 'the investors gadget') }
    

 



  }
}