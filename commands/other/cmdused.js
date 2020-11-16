const messagedelete = require("../../outdated/messagedelete")
const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db')

module.exports = {
	aliases: ['commandsused'],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: 'commands used',
	callback: (message) => {
        
let command = db.get('commands')


commandd = command.toLocaleString()

commands = commandd.replace(",", " ");

       message.channel.send(commands + ' commands have been used')
    }
}