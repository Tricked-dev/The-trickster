const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	category: 'Moderation',
	aliases: ['join', 'joinvc'],
	minArgs: 0,
	maxArgs: -1,
	
	expectedArgs: '',
	description: 'Makes the bot join a vc',
	callback: (message, args, text, client, prefix, instance) => {
		async function vc() {
			if (message.member.voice.channel) {
				const connection = await message.member.voice.channel.join();
				const dispatcher = connection.play('./audiofile.mp3');


				dispatcher.on("end", end => {});
			}
		}
		vc();
	},
};
