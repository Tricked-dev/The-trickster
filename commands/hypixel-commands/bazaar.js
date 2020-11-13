const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

module.exports = {
	aliases: [''],
	minArgs: 1,
	maxArgs: 1,
	syntaxError: 'please enter a item all caps',
	expectedArgs: 'please enter a item all caps',
	description: 'checks slothpixel api for your item',
	callback: (message, args, text, client, prefix, instance) => {
		let item = args[0];
		async function getproductdata() {
			const response = await fetch(
				`https://api.slothpixel.me/api/skyblock/bazaar/${item}`
			);
			const data = await response.json();
			const { quick_status } = data;
			let number1 = quick_status.sellPrice;
			let num1 = number1.toFixed(1);
			let number2 = quick_status.buyPrice;
			let num2 = number2.toFixed(1);
			const Embed = new Discord.MessageEmbed()
				.setColor(0x00ae86)
				.setTimestamp()
				.addField(
					`Price of ${item}`,
					`The buy price is ${num2} and the sell price is ${num1}`
				);
			message.reply(Embed);
			message.react(`${tick}`);
		}
		getproductdata();
	},
};
