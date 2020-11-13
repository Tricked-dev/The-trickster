const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
const key = '8ca23b84-794b-4485-bbf4-9d09f727eabe'

module.exports = {
	aliases: ['namehistory'],
	minArgs: 1,
	maxArgs: -1,
	syntaxError: 'please enter a ign',
	expectedArgs: 'please enter a ign',
	description: 'Searches for the names of the ign!',
	callback: (message, args, text, client, prefix, instance) => {
		async function getPlayer() {
			if (!args[0]) {
				const Embed = new Discord.MessageEmbed()
					.setColor('#03fc49')
					.setTitle(`Please add a name`);
				message.reply(Embed);
				return;
			}
			const response = await fetch(
				`https://api.hypixel.net/player?name=${args[0]}&key=${key}`
			);
			const data = await response.json();
			if (!data.player) {
				const Embeds = new Discord.MessageEmbed()
					.setColor('#03fc49')
					.setTitle(`player not found`);
				message.reply(Embeds);
				return;
			}
			let hypixel = data.player.knownAliases;

			const Embed = new Discord.MessageEmbed()
				.setColor(`#0400ff`)
				.setTimestamp()
				.setTitle(`name history of ${args[0]}`)
				.setDescription(`${hypixel}`);

			message.reply(Embed);
			message.react('762379813771542538');
		}
		getPlayer();
	},
};
