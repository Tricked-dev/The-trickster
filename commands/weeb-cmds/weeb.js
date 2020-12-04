const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
const talkedRecently = new Set();

module.exports = {
	cooldown: '10s',
	category: 'anime',
	aliases: ['neko', 'w', 'waifu'],
	minArgs: 1,
	maxArgs: -1,
	syntaxError:
		'Please select what you want: `neko kitsuma hug pat waifu cry slap punch`',
	expectedArgs: '',
	description: 'Send a weeb pic ( use at own risk)',
	callback: async (message, args, text, client, prefix, instance) => {
		let log = '769622158045347853'	 
		if (talkedRecently.has(message.author.id)) {
		const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('Cooldown	')
        .setDescription(`**Sorry you are on cooldown this command has a cooldown of 1.5 seconds**`)
        .setColor('RED')
      message.reply(Embed);
			return;
    } else {
	let waifu = args[0];
		if (waifu === 'nekolewd') {
			const Embed = new Discord.MessageEmbed()
				.setColor(0x00ae86)
				.setTimestamp()
				.setDescription(`OOps something went wrong`)
				.setFooter(`trickedbot lookn kinda thicc`);
			message.reply(Embed);
			return;
		}
		if (!waifu) {
			const Embed = new Discord.MessageEmbed()
				.setColor(0x00ae86)
				.setTimestamp()
				.setTitle('please provide one of the following words afther the t!neko')
				.setDescription(`neko\nkitsuma\nhug\npat\nwaifu\ncry,\slap,\spunch`)
				.setFooter(`${message.author.tag}`);
			message.reply(Embed);
			return;
		}
		async function lols() {
			const response = await fetch(`https://neko-love.xyz/api/v1/${waifu}`);
			const data = await response.json();
			let lol = data.url;
			if (!lol) {
				const Embed = new Discord.MessageEmbed()
					.setColor(0x00ae86)
					.setTimestamp()
					.setDescription(`OOps something went wrong`)
					.setFooter(`${message.author.tag}`);
				message.reply(Embed);
				return;
			}
			const Embed = new Discord.MessageEmbed()
				.setColor(0x00ae86)
				.setTimestamp()
				.setImage(lol)
				.setFooter(`${message.author.tag}`);
			await message.reply(Embed);
			let cmdused = client.channels.cache.get(log);
			const cmdembed = new Discord.MessageEmbed()
				.setThumbnail(client.user.avatarURL())
				.setTitle('Commadn used Notification')
				.setDescription(
					`${message.author.tag} used command neko with the args of ${args[0]}`
				);
			cmdused.send(cmdembed);
			cmdused.send(lol);
		}
		lols();
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 1500);
    }
	


	},
};
