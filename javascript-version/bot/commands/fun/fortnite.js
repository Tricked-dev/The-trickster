const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
   category: 'Fun',
  aliases: ['fn'],
  minArgs: 0,
  maxArgs: -1,

  expectedArgs: "", 
  description: 'Not cool!', 
   callback: ({message, args, text, client, prefix, instance}) => {
message.channel.send(`Fortnite is cringe i'm taking way 500 coins from you.`)    



  }
}