const canvacord = require("canvacord");
const { MessageAttachment } = require("discord.js");
const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
   category: 'Fun',
  aliases: [''],
  minArgs: 1,
  maxArgs: -1,
  syntaxError: "please mention somoene to trigger",
  expectedArgs: "please mention someone to trigger", 
  description: 'triggered LMAO', 
   callback: (message, args, text, client, prefix, instance) => {
    
  async function triggered() {
      let user = message.mentions.users.first() || message.author;
      let triggered = await canvacord.Canvas.trigger(user.displayAvatarURL({ format: "png", dynamic: false }));
      let attachment = new MessageAttachment(triggered, "triggered.gif");
      return message.channel.send(attachment);
    }

    triggered()


  }
}