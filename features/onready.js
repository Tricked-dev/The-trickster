const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = (client) => {
	client.user.setPresence({ activity: { name: '' }, status: 'offline' })
	async function startup() {
		const activities_list = [
			'With My Self',
			'Ur Messages',
			`${client.guilds.cache.size} Servers`,
			'Music',
			'to your commands',
			'Fartnite',
			'bot Things',
			'anime',
		];
		const type_list = [
			'PLAYING',
			'WATCHING',
			'WATCHING',
			'LISTENING',
			'LISTENING',
			'PLAYING',
			'PLAYING',
			'WATCHING',
		];
		setInterval(() => {
			const index = Math.floor(
				Math.random() * (activities_list.length - 1) + 1
			);
			client.user.setActivity(activities_list[index], {
				type: type_list[index],
			});
		}, 10000);
		const upchannel = client.channels.cache.get('765971179583832074');
		const upembed = new Discord.MessageEmbed()
			.setThumbnail(client.user.avatarURL())
			.setTitle('Bot restart Notification')
			.setDescription(
				'Maybe some glitch or my owner restarted me I am back online'
			);
		upchannel.send(upembed);
		console.log(`Trickedbot > Logged in as ${client.user.tag}!`);
	}
	startup();
};
