const Enmap = require("enmap") 
module.exports = async (client,command) => {


	client.on('message', async (message) => {
		if (!message.content.startsWith('!') || message.author.bot) return;
		console.log(
			`in server: ${message.guild}, ${message.author.tag} used ${message.content},`
		);
		used = await client.userProfiles.get(message.author.id, 'commands');
		client.userProfiles.set(message.author.id, used + 1, 'commands');
	});
};