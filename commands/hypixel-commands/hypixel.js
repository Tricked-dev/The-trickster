const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
const key = '8ca23b84-794b-4485-bbf4-9d09f727eabe'

module.exports = {
	cooldown: '10s',
	category: 'Hypixel Skyblock',
	aliases: ['players'],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: 'checks hypixels player count',
	callback: (message, args, text, client, prefix, instance) => {
		async function getPlayers() {
			const response = await fetch(
				`https://api.hypixel.net/gameCounts?key=${key}`
			);
			const data = await response.json();
			let hypixel = data.playerCount;
			let skyblock = data.games.SKYBLOCK.players;
			const Embed = new Discord.MessageEmbed().setColor(0x00ae86).setTimestamp()
				.setDescription(`Hypixel currently has **${hypixel}** players online.\ 
          Hypixel Skyblock currently has **${skyblock}** players online.`);

			message.reply(Embed);
			message.react('762379813771542538');
		}
		getPlayers();
	},
};
