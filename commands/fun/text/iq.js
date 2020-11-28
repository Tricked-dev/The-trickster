const Discord = require('discord.js');
const db = require('quick.db')
module.exports = {
     category: 'Fun',
    maxArgs: 1,
    syntaxError: 'Incorect usage. Usage: iq',
    aliases: ['smart'],
    description: 'Gets your IQ.',
    callback: async (message, args, text, client, prefix, instance) => {
        let target = message.mentions.members.first() || message.author
        let iq = db.fetch(`iq_${target.id}`)
        if(!iq){
        const iq = Math.floor(Math.random() * 150) + 1;
        db.set(`iq_${target.id}`, iq)  
    }
        let riq = await db.fetch(`iq_${target.id}`)
        const iEmbed = new Discord.MessageEmbed()
        .setColor('#8E44AD')    
        .setTitle("IQ Test")
        .setDescription(`${target}'s IQ is: \`${riq}\`!`)
        message.channel.send(iEmbed)
    
        },
};