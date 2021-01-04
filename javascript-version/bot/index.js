const Discord = require('discord.js');
const WOKCommands = require('wokcommands');
const config = require('./files/config.json');

const client = new Discord.Client

const Enmap = require("enmap");
const { exec } = require("child_process");

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
                .setDescription(`My default Prefix Is **${config.prefix}**! To See My List Of Commands Run **${config.prefix}help**!`)
                message.channel.send(ee)
            }
        })

client.login(config.token);