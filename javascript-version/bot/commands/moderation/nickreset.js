module.exports = {
  category: 'Moderation',  
  commands: ['reset', 'r'],
    description: 'Resets the nickname for a user.',
    callback: async ({message, args}) => {
      if (message.member.hasPermission("MANAGE_NICKNAMES") || message.author.id == 336465356304678913) {
      let target = message.author
      
      const member = message.guild.members.cache.get(target.id)
     
      await member.setNickname(member.user.username) .catch(error => message.reply(`Sorry ${message.author} I couldn't reset the nick because of : ${error}`));
      message.channel.send('Nickname reset!')
    return  
    }
         const Embed = new Discord.MessageEmbed()
      .setColor('#03fc49')
      .setTitle(`Error, you are not allowed to do this`)
    message.reply(Embed)
    return
    }
}