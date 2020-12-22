
    const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
  category: 'Moderation',
  aliases: [''],
  minArgs: 2,
  maxArgs: -1,
  syntaxError: "please use <mention> <reason>",
  expectedArgs: "please use <mention> <reason>", 
  description: 'kick a guy (poor lad)', 
   callback: (message, args, text, client, prefix, instance) => {
    

 if (message.member.hasPermission("KICK_MEMBERS") || message.author.id == 336465356304678913 ) {
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member)
      return message.reply("Please mention a valid member of this server");
    if (!member.kickable)
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");


    let reason = args.slice(1).join(' ');
    if (!reason) reason = "No reason provided";
    async function kick() {

      await member.kick(reason)
        .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
      message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
    }
    kick();
    return;
   }
    
    const Embed = new Discord.MessageEmbed()
      .setColor('#03fc49')
      .setTitle(`Error, you are not allowed to do this`)
    message.reply(Embed)
    return
  }
}