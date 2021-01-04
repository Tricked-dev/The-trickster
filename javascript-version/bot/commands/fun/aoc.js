const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
   category: 'Fun',
  aliases: ['ageofconsent'],
  minArgs: 1,
  maxArgs: -1,

  expectedArgs: "idk?", 
  description: 'idk?', 
   callback: ({message, args, text, client, prefix, instance}) => {
    
let COUNTRY = args.slice(0).join(' ');
message.react('769650250365272115')
let random = (Math.floor(Math.random() * 30) + 1)  
const Embed = new Discord.MessageEmbed()
        .setColor(0x00AE86)
        .setTimestamp()
        .setTitle(`The SEX of ${COUNTRY}`)
        .setDescription(`${random}`)
        .setFooter(`requested by ${message.author.tag}`)
        message.reply(Embed);


  }
}

