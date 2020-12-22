

    const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
  category: 'Moderation',
  aliases: ['silence'],
  minArgs: 1,
  maxArgs: -1,
  syntaxError: "please mention someone to mute",
  expectedArgs: "pelase mention someone to mute", 
  description: 'mute someone', 
   callback: (message, args, text, client, prefix, instance) => {
    
if (message.member.hasPermission("MANAGE_ROLES") || message.author.id == 336465356304678913) {
       let member = message.mentions.members.first()
    let role = message.guild.roles.cache.find(role => role.name === 'muted')
    if (!role) {
    
      const Embed = new Discord.MessageEmbed()
      .setColor('#03fc49')
      .setTitle(`No muted role found please create one`)
      message.reply(Embed)
return
    }
    member.roles.add(role);
    const Embed = new Discord.MessageEmbed()
      .setColor('#03fc49')
      .setTitle(`${member.user.tag} Just got muted`)
    message.reply(Embed)
  return
  } 
  


   const Embed = new Discord.MessageEmbed()
      .setColor('#03fc49')
      .setTitle(`Error, you are not allowed to do this`)
    message.reply(Embed)
    return
  }
}