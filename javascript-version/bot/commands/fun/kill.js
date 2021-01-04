
const fetch = require("node-fetch");
    const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
   category: 'Fun',
  aliases: ['snipe', 'murder'],
  minArgs: 1,
  maxArgs: -1,
  expectedArgs: "", 
  description: 'Shoot someone', 
   callback: ({message, args, text, client, prefix, instance}) => {
    
if (message.mentions.members.size == 1) {
      async function snipe() {
        let member = message.mentions.members.first()
        let member2 = message.author
        let member3 = member2.username
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=vx9sXJ6uR6QCmbUIbKB7UBTMm2VTtHmE&tag=kill&rating=g`);
        const data = await response.json();
        let gif = data.data.image_original_url

        const Embed = new Discord.MessageEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .setTitle(`${member3} sniped ${member.user.username}, ${member.user.username} is now dead`)
          .setImage(gif)
        message.reply(Embed)
        message.react(`${tick}`)
      }
      snipe();
    } 


  }
}