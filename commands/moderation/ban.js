const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
  aliases: [''],
  minArgs: 2,
  maxArgs: -1,
  syntaxError: "please use it the following way <mention person you want to ban> <reason>",
  expectedArgs: "please use it the following way <mention person you want to ban> <reason>", 
  description: 'ban someone cuz why the f not', 
   callback: (message, args, text, client, prefix, instance) => {
    
if (message.member.hasPermission("BAN_MEMBERS") || message.author.id == 336465356304678913) {
      let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member)
      return message.reply("Please mention a valid member of this server");
    if (!member.bannable)
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have kick permissions?");


    let reason = args.slice(1).join(' ');
    if (!reason) reason = "No reason provided";
    async function ban() {

      await member
          .ban({
            reason: `${reason}`,
          })
        .catch(error => message.reply(`Sorry ${message.author} I couldn't BAN because of : ${error}`));
      message.reply(`${member.user.tag} has been removed from the server by ${message.author.tag} because: ${reason}`);
    }
    ban();
    message.react(`${tick}`)
    return    

   }
  const Embed = new Discord.MessageEmbed()
      .setColor('#03fc49')
      .setTitle(`Error, you are not allowed to do this`)
    message.reply(Embed)
    return



  }
}