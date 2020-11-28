const Discord = require('discord.js');

module.exports = {
    name: "reaction-roles",
    aliases: [],
    run: async (message, args, client) => {
        
            const embed = new Discord.MessageEmbed()
                .setColor('#131313')
                .setTitle('React to get notified')
                .setDescription(`**Reaction Roles - Please Do Not Select Random Stuff**`)
                .addField(`💻`, `Member Role`)
                .addField(`👮‍♂️`, `Free Moderator - Abuse will lead to ban`)
            message.channel.send(embed).then(sentMessage => {
                sentMessage.react("💻").then(() => sentMessage.react("👮‍♂️")).then(() => {
                    const filter = (reaction, user) => {
                        return true;
                    }
                    const collector = sentMessage.createReactionCollector(filter);
                    collector.on('collect', (reaction, user) => {
                        if (reaction.emoji.name === '💻'){
                            role = message.guild.roles.cache.find(role => role.name === "Member");
                            message.member.roles.add(role)
                            const addedmember =  new Discord.MessageEmbed()
                            .setTitle(`Role Added`)
                            .setDescription(`You had the \`Member\` role added by reacting with 💻! Well done! Enjoy your role..`)
                            .setColor('#131313')
                            .setFooter('Nice Job!')
                            message.member.send(addedmember)

                            
                        }
                        else if (reaction.emoji.name === '👮‍♂️'){
                            role = message.guild.roles.cache.find(role => role.name === "gae");
                            message.member.roles.add(role)
                            const addedgae =  new Discord.MessageEmbed()
                            .setTitle(`Role Added`)
                            .setDescription(`You had the \`gae\` role added by reacting with 👮‍♂️! Guess wanting free mod isn't really nice in the end..`)
                            .setColor('#131313')
                            .setFooter('Nice Job!')
                            message.member.send(addedgae)
                        }
                    })
                })
            })
        }
    }
