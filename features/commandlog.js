const db = require('quick.db')
module.exports = (client) => {

	client.on('message', (message) => {
		if (!message.content.startsWith('!') || message.author.bot) return;
		console.log(
			`in server: ${message.guild}, ${message.author.tag} used ${message.content},`
		);
		db.add('commands', '1')
		let commands = db.get('commands')
		console.log('Trickedbot > commands used ' + commands)
	});
};
