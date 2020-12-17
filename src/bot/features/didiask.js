const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = (client) => {
	client.on('message', (message) => {
		const ask = [
			'no one asked',
			'did i ask?',
			'did i ask',
			'Did i ask',
			'didnt ask',
			"didn't ask",
			'Who asked',
			'Who asked?',
		];
		let foundInText = false;
		for (var i in ask) {
			if (message.content.toLowerCase().includes(ask[i].toLowerCase()))
				foundInText = true;
		}

		if (foundInText) {
			const Embed = new Discord.MessageEmbed()
				.setColor('#03fc49')
				.setImage(
					'https://cdn.discordapp.com/attachments/770710109252485170/774021908277493810/didntask.png'
				);
			message.reply(Embed);
			console.log(`Trickedbot > didnt ask was used`)
		}
	});
};
