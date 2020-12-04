const Discord = require('discord.js')
module.exports = {
    name: 'penis',
    category: 'Fun',
    description: 'penis size',
    aliases: ['pe', 'pp'],
    cooldown: '3s',
    callback: async (message, args, text, client, prefix, instance) => {
    let target = message.mentions.users.first() || message.mentions.users.last() || message.author
    let pp = await client.userProfiles.get(target.id, 'pp')  
    if(!pp || pp == 0) {
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
    await client.userProfiles.set(target.id, phrasemeaning, 'pp')

    }
}
