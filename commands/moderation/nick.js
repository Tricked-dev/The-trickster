const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
  category: 'Moderation',
  aliases: ['nic'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "please mention someone and then add the nick",
  expectedArgs: "please mention someone and then add the nick", 
  description: 'change someones nick', 
   callback: (message, args, text, client, prefix, instance) => {
    if (message.member.hasPermission("MANAGE_NICKNAMES") || message.author.id == 336465356304678913) {
let user = message.mentions.users.first() || message.author
let member = message.guild.members.cache.get(user.id)
args.shift()
let nick = args.join(' ')
member.setNickname(nick);
const Embed = new Discord.MessageEmbed()
				.setColor('#DD4814')
				.setTitle(`Nick changed!`)
				.setDescription(
					`set the nickname from ${user} to ${nick}`
				);
			message.reply(Embed);
    return    
    }
   const Embed = new Discord.MessageEmbed()
      .setColor('#03fc49')
      .setTitle(`Error, you are not allowed to do this`)
    message.reply(Embed)
    return

  }
}