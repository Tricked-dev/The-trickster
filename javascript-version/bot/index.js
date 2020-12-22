const Discord = require('discord.js');
const WOKCommands = require('wokcommands');
const config = require('./files/config.json');
const client = new Discord.Client();;
const Enmap = require("enmap");
const prefix = '!'
const { exec } = require("child_process");

client.on('ready', async () => {
    console.log('╔═( Commands )════════════════════════════════════════════════════════════════════════════════════╗')
    new WOKCommands(client, 'commands', 'features', 'messages.json')
        .setMongoPath(config.mongoPath)
        .setCategoryEmoji('Points', '🤑').setCategoryEmoji('Fun', '🎮').setCategoryEmoji('Moderation', '😎').setCategoryEmoji('Info', '📔').setCategoryEmoji('Other', '😲')
        /*
        exec('cd scripts && python3 index.py', async (error, stdout, stderr) => {
            if (error) {console.log(`error: ${error.message}`);return;}
            if (stderr) {console.log(`stderr: ${stderr}`);return;}
            }
            //does nothing since code code is already executed
        )
        */
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
client.login(config.token);