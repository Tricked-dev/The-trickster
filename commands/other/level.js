const Discord = require('discord.js');
const client = new Discord.Client();
 const Enmap = require("enmap");
  const canvacord = require("canvacord");
   lev = require('../levelchard.json')
module.exports = {
	category: 'Other',
	aliases: ['lvl'],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: 'Your level',
	callback: async (message, args, text, client) => {
let messages = await client.userProfiles.get(message.author.id, 'messages');
let leveler = await client.userProfiles.get(message.author.id, 'level');
let num = leveler+1
let req = lev.levels[num].e

const rank = new canvacord.Rank()
    .setAvatar(message.author.displayAvatarURL({ dynamic: false, size: 512, format: 'png' }))
    .setLevel(leveler)
    .setCurrentXP(messages)
    .setRequiredXP(req)
    .setStatus("dnd")
    .setProgressBar("#FFFFFF", "COLOR")
    .setUsername(message.author.username)
    .setDiscriminator(message.author.discriminator)
    .setRank(100)
rank.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, "RankCard.png");
        message.channel.send(attachment);
    });  
}
}