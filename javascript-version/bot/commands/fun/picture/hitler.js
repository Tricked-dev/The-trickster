const canvacord = require('canvacord')//npm i canvacord in your terminal 
const { MessageAttachment } = require("discord.js");
const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
   category: 'Fun',
  aliases: ['worsethanhitler'],
  minArgs: 1,
  maxArgs: -1,
  expectedArgs: "please mention someone", 
  description: 'dank memerS', 
   callback: (message, args, text, client, prefix, instance) => {
async function hitler() {
            let user = message.mentions.users.first() || message.author;
            let triggered = await canvacord.Canvas.hitler(user.displayAvatarURL({ format: "png", dynamic: false }));
            let attachment = new MessageAttachment(triggered, "worse_than_hitler.png");
            return message.channel.send(attachment);
}
            hitler()
    

  }
}