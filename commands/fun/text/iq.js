const Discord = require('discord.js');

module.exports = {
    maxArgs: 1,
    syntaxError: 'Incorect usage. Usage: iq',
    aliases: ['smart'],
    description: 'Gets your IQ.',
    callback: async (message, args, text, client, prefix, instance) => {
        let user = message.mentions.members.first() || message.author
        const iq = Math.floor(Math.random() * 150) + 1;
        const iEmbed = new Discord.MessageEmbed()
        .setColor('#8E44AD')    
        .setTitle("IQ Test")
            .setDescription(`${user}'s IQ is: \`${iq}\`!`)
            message.channel.send(iEmbed)
    },
};