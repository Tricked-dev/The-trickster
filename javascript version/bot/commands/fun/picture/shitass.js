
const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
   category: 'Fun',
  aliases: ['sa'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'ahh yes my fav meme!', 
   callback: (message, args, text, client, prefix, instance) => {
    
message.channel.send('https://tenor.com/view/heyshitass-shitass-heyshitasswannaseemespeedbridge-assshit-speedbridge-gif-18947662')


  }
}