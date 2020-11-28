const messagedelete = require("../../outdated/messagedelete")
const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db')

module.exports = {
	category: 'Other',
	aliases: ['commandsused'],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: 'commands used',
	callback: (message) => {
        
let command = db.get('commands')



       message.channel.send(command + ' commands have been used')
    }
}