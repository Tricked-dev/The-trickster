const Discord = require('discord.js')
const db = require("quick.db");

module.exports = {
    name: 'penis',
    description: 'penis size',
    aliases: ['pe', 'pp'],
    cooldown: '3s',
    callback: async (message, args, text, client, prefix, instance) => {
    let target = message.mentions.users.first() || message.author
    let pp = db.fetch(`pp_${target.id}`)
    if(!pp) {
            var phrases = [
            "8D Smoll",
            "8=D",
            "8==D",
            "8===D",
            "8====D",
            "8=====D Average Sizer",
            "8======D",
            "8=======D",
            "8========D",
            "8=========D",
            "8==========D BBC Right Here",
                
       ];    
    var phrasemeaning = phrases[Math.floor(Math.random()*phrases.length)]
    
    } else {
        var phrasemeaning = pp
    }


    const embed = new Discord.MessageEmbed()
    .setTitle(`Penis Calculator`)
    .setDescription(`${phrasemeaning}\n\n${target}'s Penis Size.`)
    .setColor(`RANDOM`)      
    message.channel.send(embed)
    db.set(`pp_${target.id}`, phrasemeaning)

    }
}
