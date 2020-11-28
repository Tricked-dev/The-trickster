const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
const key = '8ca23b84-794b-4485-bbf4-9d09f727eabe'



module.exports = {
	category: 'Hypixel Skyblock',
	aliases: ['sbank'],
	minArgs: 2,
	maxArgs: -1,
	syntaxError: 'please enter a ign, profile name',
	expectedArgs: 'please enter a ign, profile name',
	description: 'Check the bank of someone',
	callback: (message, args, text, client, prefix, instance) => {
		let cutename = args[1];
		let ign = args[0];
		if (!cutename) return message.reply('please use a valid profile name');
		async function getbanks() {
			message.channel.startTyping();
			const profile = await fetch(
				`https://sky.shiiyu.moe/api/v2/coins/${ign}/${cutename}`
			);
			const data = await profile.json();
			let coopid = data.profile_id;
			let pur = data.purse;
			let purs = pur.toFixed(0);
			let purse = purs.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
			message.channel.stopTyping();
			const hypixels = await fetch(
				`https://api.hypixel.net/skyblock/profile?key=${key}&profile=${coopid}`
			);
			const needs = await hypixels.json();
			message.channel.startTyping();
			let bal = needs.profile.banking.balance;
			let balance = bal.toFixed(0);
			let bald = balance.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
			message.channel.stopTyping();
			const Embed = new Discord.MessageEmbed()
				.setColor(0x00ae86)
				.setTimestamp()
				.setTitle(
					`${ign} has ${bald} coins on profile ${cutename}, and ${purse} coins in purse`
				)
				.setFooter(`Profile id ${coopid}`);
			message.reply(Embed);
			message.react(`${tick}`);
		}
		getbanks();
	},
};
