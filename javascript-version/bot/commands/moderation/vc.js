const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
module.exports = {
	category: 'Moderation',
	aliases: ['join', 'joinvc'],
	minArgs: 0,
	maxArgs: -1,
	
	expectedArgs: '',
	description: 'Makes the bot join a vc',
	callback: async ({message, args, text, client, prefix, instance}) => {
		async function vc() {
			if (message.member.voice.channel) {
				const connection = await message.member.voice.channel.join();
				
				
				const broadcast = client.voice.createBroadcast()
				broadcast.play(ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ', { filter: 'audioonly' }));
// Play "music.mp3" in all voice connections that the client is in
				for (const connection of client.voice.connections.values()) {
					for (let step = 0; step < 20; step++) {
  // Runs 5 times, with values of step 0 through 4.
  connection.play(broadcast);
}

  				
				}
			}
		}
		vc();
	},
};
