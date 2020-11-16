     const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	aliases: [''],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: 'trickedonly /shrug',
	callback: (message, args, text, client, prefix, instance) => {
     let mins = Math.ceil(1);
    let maxs = Math.floor(4); 
    const index = Math.floor(
				Math.floor(Math.random() * (maxs - mins) + mins)
            );

console.log(index)
    }
}