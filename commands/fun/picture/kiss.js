const Discord = require('discord.js')
const client = new Discord.Client()
const fetch = require("node-fetch");

module.exports = {
  aliases: [''],
  minArgs: 1,
  maxArgs: -1,
  syntaxError: "please mention someone",
  expectedArgs: "please mention someone", 
  description: 'kiss sum1 (gea)', 
   callback: (message, args, text, client, prefix, instance) => {
    

if (message.mentions.members.size == 1) {
      async function gift() {
        let member = message.mentions.members.first()
        let member2 = message.author
        let member3 = member2.tag
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=vx9sXJ6uR6QCmbUIbKB7UBTMm2VTtHmE&tag=kiss&rating=g`);
        const data = await response.json();
        let gif = data.data.image_original_url

        const Embed = new Discord.MessageEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .setTitle(`${member3} kissed ${member.user.tag}!`)
          .setDescription("babies when?")
          .setImage(gif)
        message.reply(Embed)
        message.react(`${tick}`)
      }
      gift();
    }

  }
}
