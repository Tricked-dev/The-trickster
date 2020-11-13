const fetch = require("node-fetch");
const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
  aliases: ['huggy'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'hug sum1',  
  callback: (message, args, text, client, prefix, instance) => {
    
 if (message.mentions.members.size == 1) {
      async function gift() {
        let member = message.mentions.members.first()
        let member2 = message.author
        let member3 = member2.tag
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=vx9sXJ6uR6QCmbUIbKB7UBTMm2VTtHmE&tag=hug&rating=g`);
        const data = await response.json();
        let gif = data.data.image_original_url

        const Embed = new Discord.MessageEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .setTitle(`${member3} gave ${member.user.tag} a hug!`)
          .setImage(gif)
        message.reply(Embed)
        message.react(`${tick}`)
      }
      gift();
    }


  }
}