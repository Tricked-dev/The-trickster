
    const Discord = require('discord.js')
const client = new Discord.Client()
const fetch = require("node-fetch");
module.exports = {
  aliases: ['kitty'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'get a cat', 
  callback: (message, args, text, client, prefix, instance) => {
    
 async function cats() {
      const response = await fetch(`https://aws.random.cat/meow`);
      const data = await response.json();
      let meow = data.file
      const Embed = new Discord.MessageEmbed()
        .setColor(0x00AE86)
        .setTimestamp()
        .setImage(meow)
        .setFooter(`${message.author.tag} powered by https://aws.random.cat/meow`)
      message.reply(Embed)
    }
    cats();



  }
}