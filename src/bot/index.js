const Discord = require('discord.js');
const WOKCommands = require('wokcommands');
const config = require('./config.json');
const client = new Discord.Client();;
const Enmap = require("enmap");
const Statcord = require("statcord.js");
const prefix = '!'
const { exec } = require("child_process");

client.on('ready', () => {
    console.log('╔═( Commands )════════════════════════════════════════════════════════════════════════════════════╗')
    new WOKCommands(client, 'commands', 'features', 'messages.json')
        .setMongoPath(config.mongoPath)
        .setCategoryEmoji('Points', '🤑').setCategoryEmoji('Fun', '🎮').setCategoryEmoji('Moderation', '😎').setCategoryEmoji('Info', '📔').setCategoryEmoji('Other', '😲')
        // Notifaction
        exec('python3 index.py', async (error, stdout, stderr) => {
            if (error) {console.log(`error: ${error.message}`);return;}
            if (stderr) {console.log(`stderr: ${stderr}`);return;}
            }
            //does nothing since code code is already executed
        )
        
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
            if(message.content == `<@!${client.user.id}>`) {
                const ee = new Discord.MessageEmbed()
                .setTitle(`I Was Pinged!`)
                .setDescription(`My default Prefix Is **${prefix}**! To See My List Of Commands Run **${prefix}help**!`)
                message.channel.send(ee)
            }
        })

const statcord = new Statcord.Client({client,key: config.keys,postCpuStatistics: false,postMemStatistics: false,postNetworkStatistics: false,});
client.on("ready", async () => {statcord.autopost();});

client.on("message", async (message) => {if (message.author.bot) return;if (message.channel.type !== "text") return;if (!message.content.startsWith(prefix)) return;let command = message.content.split(" ")[0].toLowerCase().substr(prefix.length);statcord.postCommand(command, message.author.id);});

client.login(config.token);