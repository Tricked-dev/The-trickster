const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

module.exports = {
	aliases: ['giphy'],
	minArgs: 1,
	maxArgs: -1,
	syntaxError: 'please enter a search term',
	expectedArgs: 'please enter a search term',
	description: 'searhes giphy',
	callback: (message, args, text, client, prefix, instance) => {
		let name = args[0];
		async function gif() {
			const response = await fetch(
				`https://api.giphy.com/v1/gifs/random?api_key=vx9sXJ6uR6QCmbUIbKB7UBTMm2VTtHmE&tag=${name}&rating=g`
			);
			const data = await response.json();
			let gif = data.data.image_original_url;
			if (!gif)
				return message.reply(
					`Sorry, Couldnt find any gifs for the search ${name} try again.`
				);
			const Embed = new Discord.MessageEmbed()
				.setColor(0x00ae86)
				.setTimestamp()
				.setImage(gif)
				.setFooter(message.author.tag);
			message.reply(Embed);
			message.react('762379813771542538');
		}
		gif();
	},
};
