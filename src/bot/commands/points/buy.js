 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 module.exports = {
  cooldown: '2s',
  category: 'Points',
  aliases: [''],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'Buy a item from the shop', 
  callback: async (message, args, text, client) => {
let item =  args.slice(0).join(' ').toLowerCase()
let bank =  client.userProfiles.get(message.author.id, 'points');

    let array = ['dagger', 'begginer', 'ice cream', 'the investors gadget', 'trickedbots soul', 'commedy award']
    if(!array.includes(item)) {
      message.reply('the shop is not selling that item')
      return
    }

    if(item == 'dagger') { let check = (bank - '5000') ; if (check < 0){ const Embed = new Discord.MessageEmbed() .setColor('#03fc49') .setTitle('Points!') .setDescription(`**You dont have enough Points to buy that**`) .setColor('BLUE'); message.reply(Embed); return }
    client.userProfiles.math(message.author.id, "-", 5000, 'points');
    client.userProfiles.push(message.author.id, "Dagger", 'items'); }

    if(item == 'begginer') { let check = (bank - '5000') ; if (check < 0){ const Embed = new Discord.MessageEmbed() .setColor('#03fc49') .setTitle('Points!') .setDescription(`**You dont have enough Points to buy that**`) .setColor('BLUE'); message.reply(Embed); return }
    client.userProfiles.math(message.author.id, "-", 5000, 'points');
    client.userProfiles.push(message.author.id, ":beginner: ", 'items'); }

    if(item == 'ice cream') { let check = (bank - '300') ; if (check < 0){ const Embed = new Discord.MessageEmbed() .setColor('#03fc49') .setTitle('Points!') .setDescription(`**You dont have enough Points to buy that**`) .setColor('BLUE'); message.reply(Embed); return }
    client.userProfiles.math(message.author.id, "-", 300, 'points');
    client.userProfiles.push(message.author.id, ":ice_cream:", 'items');
  }
    if(item == 'the investors gadget') { let check = (bank - '50000') ; if (check < 0){ const Embed = new Discord.MessageEmbed() .setColor('#03fc49') .setTitle('Points!') .setDescription(`**You dont have enough Points to buy that**`) .setColor('BLUE'); message.reply(Embed); return }
    client.userProfiles.math(message.author.id, "-", 50000, 'points');
    client.userProfiles.push(message.author.id, "The investor's gadget", 'items');  }
    
    if(item == 'trickedbots soul') { let check = (bank - '500000') ; if (check < 0){ const Embed = new Discord.MessageEmbed() .setColor('#03fc49') .setTitle('Points!') .setDescription(`**You dont have enough Points to buy that**`) .setColor('BLUE'); message.reply(Embed); return }
    client.userProfiles.math(message.author.id, "-", 500000, 'points');
    client.userProfiles.push(message.author.id, "Tricked bot's Soul", 'items'); 
}
    if(item == 'commedy award') { let check = (bank - '42069') ; if (check < 0){ const Embed = new Discord.MessageEmbed() .setColor('#03fc49') .setTitle('Points!') .setDescription(`**You dont have enough Points to buy that**`) .setColor('BLUE'); message.reply(Embed); return }
    client.userProfiles.math(message.author.id, "-", 42069, 'points');
    client.userProfiles.push(message.author.id, 'Commedy Award', 'items');
}
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Daily`, message.author.displayAvatarURL)
    .setColor("GREEN")
    .setDescription(`You bought a ${item}.`)
    message.reply(embed)

    


 



  }
}