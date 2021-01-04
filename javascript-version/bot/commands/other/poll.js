const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	category: 'Other',
	aliases: [''],
	minArgs: 0,
	maxArgs: -1,
	expectedArgs: '',
	description: 'pollem',
	callback: ({message, args, text, client, prefix, instance}) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("sorry you cannot use this you need the permission manage messages for this command")
        message.delete()
        const input = args.slice(0).join(' ');
        if(!input) return message.reply('pelase ask a question')

        const dataEmbed = {
    title : input,
    description :`Vote with 👍 or 👎`,
    color : `GREEN`,
    footer: {
		text: `requested by ${message.author.tag}`,
		icon_url: '',
	},
    }

    try{
       message.channel.send({embed: dataEmbed})
            .then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
    } catch (error) {error;}
}
}