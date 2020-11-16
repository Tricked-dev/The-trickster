module.exports = (client) => {
client.on("guildCreate", guild => {
    const { MessageEmbed } = require('discord.js')
  const ID = "755166644451541230";
    const channel = client.channels.cache.get(ID);
    const sowner = guild.owner;
    if(!channel) return;
    const embed = new MessageEmbed()
        .setTitle('New Server Joined!')
        .addField(`Server Name:`, `${guild.name}`)
        .addField(`Server ID:`, `${guild.id}`)
        .addField(`Members:`, `${guild.memberCount}`)
        .addField(`Server Owner Tag:`, `${sowner.user.tag}`)
        .addField(`ServerOwner ID:`, `${sowner.id}`)
        .setTimestamp()
        .setColor('RANDOM')
        .setFooter(`My new Server Count - ${client.guilds.cache.size}`);
    channel.send(embed);
  })
}