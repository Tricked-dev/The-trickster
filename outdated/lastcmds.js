const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

module.exports = {
	aliases: ['delmsg', 'msgdel'],
	minArgs: 1,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description:
		'Trickedonly command until i find a way to make anyone with perms and me able to use it <3',
	callback: async (message, args, text, client, prefix, instance) => {
			if (message.author.id == 336465356304678913) {
                message.channel.send(command)

            }
        }
    }