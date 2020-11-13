const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js'); 
const db = require('quick.db')
module.exports = {
aliases: ['n-passes', 'pass'],
  minArgs: 1,
  maxArgs: -1,
  syntaxError: "use <set> <amount> <user> or <bal> <user>",
  expectedArgs: "use <set> <amount> <user> or <bal> <user>", 
  description: 'Very pog', 
callback: async (message, args, text, client, prefix, instance) => {
 let amount = args[1]
  let user = message.mentions.members.first() || message.author
 
  if (message.author.id == 336465356304678913 || message.author.id == 400762530709897229) {
		} else {
			const Embed = new Discord.MessageEmbed().setTitle(
				`You are not allowed to use this command`
			);
			message.reply(Embed);
			return;
		}
 if( args[0]  == 'set') {
   await  db.set(`pass_${user.id}`, amount)
   message.channel.send(`user now has ${amount} npasses!`)
return
 }
 if( args[0]  == 'bal') {
    let bank = await db.fetch(`pass_${user.id}`)
if(!bank) {
 let bank = 0
}
  message.channel.send(`That user has ${bank} n-passes`)
  return
 }
}
}