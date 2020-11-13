const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();
const key = '8ca23b84-794b-4485-bbf4-9d09f727eabe'

module.exports = {
	aliases: ['profilename'],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: "get someone's last played profile",
	callback: (message, args, text, client, prefix, instance) => {
		async function profiles() {
			const response = await fetch(
				`https://api.mojang.com/users/profiles/minecraft/${args[0]}`
			);
			const datas = await response.json();
			let uids = datas.id;

			let activeLastSave = 0,
				activeProfile = '',
				targetUUID = `${uids}`;
					apiKey = `${key}`;

			fetch(
				`https://api.hypixel.net/skyblock/profiles?key=${apiKey}&uuid=${targetUUID}`
			)
				.then((response) => response.json())
				.then((data) => {
					let trimmedUUID = targetUUID.replace(/-/g, '');
					for (x in data.profiles) {
						if (
							data.profiles[x].members[trimmedUUID].last_save > activeLastSave
						) {
							activeLastSave = data.profiles[x].members[trimmedUUID].last_save;
							activeProfile = data.profiles[x];
						}
						return message.channel.send(
							`${args[0]} was last seen on profile ${activeProfile.cute_name}`
						);
					}
					return message.channel.send(
						`${args[0]} was last seen on profile ${activeProfile.cute_name}`
					);
				});
		}
		profiles();
	},
};
