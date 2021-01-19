const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	category: 'Other',
	aliases: [''],
	minArgs: 0,
	maxArgs: -1,
	
	expectedArgs: '',
	description: 'check yur connection',
	callback: ({message, args, text, client, prefix, instance}) => {
        client.fetchUser(theUsersID).then(myUser => {
    console.log(myUser.avatarURL); // My user's avatar is here!
});



        message.channel.createWebhook(message.author.tag, message.author.displayAvatarURL({ size: 4096, dynamic: true }))
        .then(wb => new Discord.WebhookClient(wb.id, wb.token)).catch(console.error).then(weebhook => weebhook.send("owo"))
        

	},
};
