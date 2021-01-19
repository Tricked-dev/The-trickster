const Discord = require('discord.js');
const WOKCommands = require('wokcommands');
const config = require('./files/config.json');

const client = new Discord.Client({
  partials: ['MESSAGE', 'REACTION'],
})

const Enmap = require("enmap");

client.on('ready', async () => {
    console.clear();
    console.log('╔═( Commands )════════════════════════════════════════════════════════════════════════════════════╗')
    const showStartupWarnings = true
    const messagesPath = './files/messages.json'


  const dbOptions = {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }

    
     new WOKCommands(client, {
    commandsDir: 'commands',
    featureDir: 'events',
    messagesPath,
    testServers: [config.TestServer],
    showWarns: true,
    dbOptions
  })
    .setMongoPath(config.mongoPath)
    .setDefaultPrefix(config.prefix)
    .setBotOwner([config.Master])
    .setColor(0xff0000)
     
    .setCategorySettings([
      {
        name: 'Fun',
        emoji: '🎮'
      },
      {
        name: 'Info',
        emoji: '📪'
      },
      {
        name: 'Other',
        emoji: '🔮'
      },
      {
        name: 'tags',
        emoji: '📰'
      },
      {
        name: 'Moderation',
        emoji: '🔨'
      },
      {
        name: 'Points',
        emoji: '💸'
      },
      {
        name: 'hidden',
        emoji: '💀',
        hidden: true
      },
      {
        name: 'Configuration',
        emoji: '🚧',
        hidden: true
      }
    ])
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
                .setDescription(`My default Prefix Is **${config.prefix}**! To See My List Of Commands Run **${config.prefix}help**!`)
                message.channel.send(ee)
            }
        })
module.exports = { client }
client.login(config.token);