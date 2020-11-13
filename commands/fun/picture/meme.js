const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

module.exports = {
	aliases: ['joke', 'reddit'],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: 'searches for a meme',
	callback: (message, args, text, client, prefix, instance) => {
		async function meme() {
			const random = new Random();
			let data = await random.getMeme();
			message.channel.send(data);
		}
		meme();
	},
};
