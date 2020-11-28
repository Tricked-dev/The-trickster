        const Embed = new Discord.MessageEmbed()
        .setTitle('Points!')
        .setDescription(`**${amount} Points were given to you by !claim enjoy!**`)
        .setColor('GREEN')
        message.reply(Embed);
    db.set(`claim_${message.author.id}`, Date.now())
    db.add(`Points_${message.author.id}`, amount)