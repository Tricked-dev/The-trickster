const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
const key = '8ca23b84-794b-4485-bbf4-9d09f727eabe'


module.exports = {
	aliases: ['hypixelprofile'],
	minArgs: 1,
	maxArgs: -1,
	syntaxError: 'please enter a name',
	expectedArgs: 'name when?',
	description: 'uses 4 fucking websites to get the best results',
	callback: (message, args, text, client, prefix, instance) => {
		async function profile() {
			if (!args[0]) {
				const Embed = new Discord.MessageEmbed()
					.setColor('#03fc49')
					.setTitle(`Please add a name`);
				message.reply(Embed);
				return;
			}
			message.channel.startTyping();
			const response = await fetch(
				`https://api.hypixel.net/player?name=${args[0]}&key=${key}`
			);
			const data = await response.json();

			const responses = await fetch(
				`https://api.slothpixel.me/api/players/${args[0]}`
			);
			const datas = await responses.json();

			let uuid = data.player.uuid;
			const respon = await fetch(
				` https://api.hypixel.net/guild?key=${key}&player=${uuid}`
			);
			const dat = await respon.json();

			let name = data.player.displayname;
			let check = dat.guild;

			if (`${check}` == 'null') guild = 'none';
			else guild = dat.guild.name;

			let kerma = data.player.karma;

			let lp = data.player.mcVersionRp;

			let ran = datas.rank;

			let discord = datas.links.DISCORD;
			if (!discord) discord = 'unlinked';

			let votes = datas.voting.total_votes;

			if (`${ran}` == 'null') rank = 'no-rank';
			if (`${ran}` == 'VIP') rank = 'Vip';
			if (`${ran}` == 'VIP_PLUS') rank = 'Vip+';
			if (`${ran}` == 'MVP') rank = 'Mvp';
			if (`${ran}` == 'MVP_PLUS') rank = 'Mvp+';
			if (`${ran}` == 'YOUTUBER') rank = 'YOUTUBER';
			if (`${ran}` == 'HELPER') rank = 'Helper';
			if (`${ran}` == 'MOD') rank = 'Mod';
			if (`${ran}` == 'ADMIN') rank = 'Admin';

			let pitkd = datas.stats.Pit.kd_ratio;
			let quakekd = datas.stats.Quake.gamemodes.solo.kd;
			let smashkd = datas.stats.Smash.kd;
			let uhckd = datas.stats.UHC.kd;
			let wallskd = datas.stats.Walls.kd;

			let language = data.player.userLanguage;
			if (!language) language = 'ENGLISH';
			let lan = language.toLowerCase();

			let level = datas.level;
			if (!level) level = 'api error slothpixel didnt respond';

			if (!data.player) {
				const Embeds = new Discord.MessageEmbed()
					.setColor('#03fc49')
					.setTitle(`player not found`);
				message.reply(Embeds);
				message.channel.stopTyping();
				return;
			}
			const Embeds = new Discord.MessageEmbed()
				.setColor('#3F13C4')
				.setTitle(`Profile of ${name}`)
				.setThumbnail(`https://crafatar.com/renders/body/${uuid}`)
				.setDescription(
					`Guild: ${guild}\n level: ${level}\nRank: ${rank}\nDiscord: ${discord}\nKarma: ${kerma}\nVotes: ${votes}\nLast played version: ${lp}\nHypixel language ${lan}`
				);
			message.reply(Embeds);

			const Embed = new Discord.MessageEmbed()
				.setColor('#DD4814')
				.setTitle(`Some cool kill to deaths`)
				.setDescription(
					`Pit kd: ${pitkd}\nQuakecraft kd: ${quakekd}\nSmash hereos kd: ${smashkd}\nUHC champions kd: ${uhckd}\nWalls kd: ${wallskd}`
				);
			message.reply(Embed);
			message.channel.stopTyping();
		}
		profile();
	},
};
