 const Discord = require("discord.js") 
 const Enmap = require("enmap") 
 const { MessageEmbed } = require('discord.js')  
 const ms = require("parse-ms") 
 const { get } = require("snekfetch");
 const { no, add, sub } = require("../../utils/util.js");
 module.exports = {
  cooldown: '2s',
  category: 'Points',
  aliases: [''],
  minArgs: 0,
  maxArgs: -1,

  expectedArgs: "", 
  description: 'Get your free su8m of money', 
  callback: async ({message, args, text, client}) => {
    
    
    let newrs = client.userProfiles.get(message.author.id, 'started') 
    if (newrs !== 1) {
    message.channel.send(`points will now start flooding next time you do !claim`)
    client.userProfiles.set(message.author.id, Date.now(), 'claim') 
    client.userProfiles.set(message.author.id, 1, 'started') 
    return
    }
    let news = client.userProfiles.get(message.author.id, 'claim') 
    let bank = client.userProfiles.get(message.author.id, 'points')

    let now = Date.now()
    let points = (now - news)
    
        let goalitem = "The investor's gadget"
    let item = client.userProfiles.get(message.author.id, "items")
    if(item.includes(goalitem)) {
              let amount = (points / 40000)
      await client.userProfiles.set(message.author.id, amount, 'temp') 
    } else {
      let amount = (points / 80000)
      await client.userProfiles.set(message.author.id, amount, 'temp') 
    }
    


  let amount = await client.userProfiles.get(message.author.id, 'temp') 
  amounter = amount.toFixed(0)
  amun = Number(amounter)
    const Embed = new Discord.MessageEmbed()
        .setTitle('points!')
        .setDescription(`**${amounter} points were given to you by !claim enjoy!**`)
        .setColor('GREEN')
    message.reply(Embed) 

add(message.author.id, amun)
client.userProfiles.set(message.author.id, Date.now(), 'claim') 
  
}
}
