const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
  aliases: ['hurt'],
  minArgs: 1,
  maxArgs: -1,
  syntaxError: "Please mention somoene to bully",
  expectedArgs: "", 
  description: 'bully someone',  
  callback: (message, args, text, client, prefix, instance) => {
    

message.delete();
    let member = message.mentions.members.first()
    const Embed = new Discord.MessageEmbed()
      .setColor('#03fc49')
      .setTitle(`${member.user.tag} IS NOOB!!!!`)
    message.reply(Embed)
  }
}
