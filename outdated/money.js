const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
const db = require('quick.db')
module.exports = {
	aliases: [''],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: 'please enter a item all caps',
	expectedArgs: 'please enter a item all caps',
	description: 'checks slothpixel api for your item',
	callback: (message, args, text, client, prefix, instance, parseUsers) => {

message.guild.members.cache.array().forEach(member => {
  db.add(`points_${member.id}`,   Math.floor(Math.random() * (5000 - 200) + 200))
});
        
    

    }
}