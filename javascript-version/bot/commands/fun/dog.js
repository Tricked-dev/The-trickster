    const Discord = require('discord.js')
const client = new Discord.Client()
const fetch = require("node-fetch");
module.exports = {
   category: 'Fun',
  aliases: ['doggy', 'doggo', 'pet'],
  minArgs: 0,
  maxArgs: -1,

  expectedArgs: "", 
  description: 'send a doggo pic :dark_sunglasses:', 
   callback: (message, args, text, client, prefix, instance) => {
    
async function doggy() {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
      const data = await response.json();
      let bark = data.message
      const Embed = new Discord.MessageEmbed()
        .setColor(0x00AE86)
        .setTimestamp()
        .setImage(bark)
        .setFooter(`${message.author.tag} powered by https://dog.ceo/dog-api/`)
      message.reply(Embed)
    }
    doggy();



  }
}