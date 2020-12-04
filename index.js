const Discord = require('discord.js');
const WOKCommands = require('wokcommands');
const config = require('./config.json');
const client = new Discord.Client();;
const Enmap = require("enmap");
require('events').EventEmitter.defaultMaxListeners = 25;

client.on('ready', () => {
    console.log('╔═══════════════════════════════════( WOKcommands )══════════════════════════════════╗')
    new WOKCommands(client, 'commands', 'features')
        .setMongoPath(config.mongoPath)
        .setMaxListeners(20)
		.setSyntaxError('Incorrect syntax! Please use {PREFIX}{COMMAND} {ARGUMENTS}').setCategoryEmoji('Points', '🤑').setCategoryEmoji('Fun', '🎮').setCategoryEmoji('Moderation', '😎').setCategoryEmoji('Other', '😲').setCategoryEmoji('Hypixel Skyblock', '😲')
    });


client.userProfiles = new Enmap({
    name: 'userProfiles',
    fetchAll: true,
    autoFetch: true,
    cloneLevel: 'deep'
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
    if (!status) return
    else console.error(status);
});
client.login(config.token);