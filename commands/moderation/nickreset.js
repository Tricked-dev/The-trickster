module.exports = {
    commands: ['reset', 'r'],
    description: 'Resets the nickname for a user.',
    callback: (message, args) => {
      if (message.member.hasPermission("MANAGE_NICKNAMES") || message.author.id == 336465356304678913) {
      let target = message.author
      
      const member = message.guild.members.cache.get(target.id)
     
      member.setNickname(member.user.username)
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