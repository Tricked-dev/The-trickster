const Discord = require('discord.js');
const WOKCommands = require('wokcommands');
const config = require('./config.json');
const client = new Discord.Client();;

client.on('ready', () => {
	new WOKCommands(client, 'commands', 'features')
		.setMongoPath(config.mongoPath)
		.setSyntaxError('Incorrect syntax! Please use {PREFIX}{COMMAND} {ARGUMENTS}')
        .setCategoryEmoji('Points', '🤑')
        .setCategoryEmoji('Fun', '🎮')
        .setCategoryEmoji('Moderation', '😎')
        .setCategoryEmoji('Other', '😲')
        .setCategoryEmoji('Hypixel Skyblock', '😲')
    });




const Statcord = require("statcord.js");
const prefix = '!'
    const statcord = new Statcord.Client({
    client,
    key: config.keys,
    postCpuStatistics: false,
    postMemStatistics: false,
    postNetworkStatistics: false,
});


client.on("ready", async () => {
    statcord.autopost();
});


client.on("message", async (message) => {
    if (message.author.bot) return;
    if (message.channel.type !== "text") return;

    if (!message.content.startsWith(prefix)) return;

	let command = message.content.split(" ")[0].toLowerCase().substr(prefix.length);
	 statcord.postCommand(command, message.author.id);
    }
);



statcord.on("post", status => {
    if (!status) console.log("Trickedbot > status posted");
    else console.error(status);
});
client.login(config.token);