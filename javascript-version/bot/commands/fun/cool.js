
const Discord = require('discord.js')
const client = new Discord.Client()
const fetch = require("node-fetch");

module.exports = {
   category: 'Fun',
  aliases: ['eyebleach'],
  minArgs: 0,
  maxArgs: -1,

  expectedArgs: "", 
  description: 'get some pet pics', 
   callback: async ({message, args, text, client, prefix, instance}) => {
    


      const response = await fetch(`https://www.reddit.com/r/Eyebleach/random.json`);
      const data = await response.json();
      let img = data[0].data.children[0].data.url_overridden_by_dest
      let title = data[0].data.children[0].data.title
      const Embed = new Discord.MessageEmbed()
        .setColor(0x00AE86)
        .setTimestamp()
        .setTitle(title)
      message.reply(Embed)
      message.react('762379813771542538')
      message.channel.send(img)


  }
}