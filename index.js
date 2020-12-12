const Discord = require('discord.js');
const WOKCommands = require('wokcommands');
const config = require('./config.json');
const client = new Discord.Client();;
const Enmap = require("enmap");
const Statcord = require("statcord.js");
const prefix = '!'

client.on('ready', () => {
    console.log('╔═( Commands )════════════════════════════════════════════════════════════════════════════════════╗')
    new WOKCommands(client, 'commands', 'features')
        .setMongoPath(config.mongoPath)
		.setSyntaxError('Incorrect syntax! Please use {PREFIX}{COMMAND} {ARGUMENTS}').setCategoryEmoji('Points', '🤑').setCategoryEmoji('Fun', '🎮').setCategoryEmoji('Moderation', '😎').setCategoryEmoji('Info', '📔').setCategoryEmoji('Other', '😲')
    });


client.userProfiles = new Enmap({
    name: 'userProfiles',
    fetchAll: true,
    autoFetch: true,
    cloneLevel: 'deep'
});
client.guild = new Enmap({
    name: 'guild',
    fetchAll: true,
    autoFetch: true,
    cloneLevel: 'deep'
});


client.on('message', message => {
    //unless you defined it alr
    
    //again it can be bot.user.id or client.user.id
            if(message.content === `<@!${client.user.id}>`) {
    
    //it can be discord or Discord Or Just MessageEmbed If You Didnt Define Discord 
                const ee = new Discord.MessageEmbed()
                .setTitle(`I Was Pinged!`)
                .setDescription(`My default Prefix Is **${prefix}**! To See My List Of Commands Run **${prefix}help**!`)
                message.channel.send(ee)
            }
        })

const statcord = new Statcord.Client({client,key: config.keys,postCpuStatistics: false,postMemStatistics: false,postNetworkStatistics: false,});
client.on("ready", async () => {statcord.autopost();});


client.on("message", async (message) => {if (message.author.bot) return;if (message.channel.type !== "text") return;if (!message.content.startsWith(prefix)) return;let command = message.content.split(" ")[0].toLowerCase().substr(prefix.length);statcord.postCommand(command, message.author.id);});
statcord.on("post", status => {if (!status) return; else console.error(status);});
client.login(config.token);