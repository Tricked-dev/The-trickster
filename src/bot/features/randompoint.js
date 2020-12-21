 const Discord = require("discord.js");
 const client = new Discord.Client();
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
module.exports = (client) => {
client.userProfiles = new Enmap({
    name: 'userProfiles'
});
  client.on('message', async message => {
  bank = await client.userProfiles.get(message.author.id, 'points');
  let mins = Math.ceil(1);
    let maxs = Math.floor(1000); 
    const index = Math.floor(
				Math.floor(Math.random() * (maxs - mins) + mins)
            );

if(index > '750'){
    let min = Math.ceil(25);
    let max = Math.floor(250); 
    const indexv = Math.floor(
                
        Math.floor(Math.random() * (max - min) + min)
            );
    await client.userProfiles.set(message.author.id, bank + indexv, 'points');
    
    }

if(index == '50'){
async function point() {
    let member = message.author
    let min = Math.ceil(1000);
    let max = Math.floor(5000); 
    const indexs = Math.floor(
                
        Math.floor(Math.random() * (max - min) + min)
            );
        await client.userProfiles.set(message.author.id, bank + indexs, 'points');
        bank = await client.userProfiles.get(message.author.id, 'points');

  if (bank === null) bank = 0;
const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('Points!')
        .setDescription(`**${member} has gained ${indexs} Points while typing and has ${bank} Points!**`)
        .setColor('PURPLE')
	  message.reply(Embed);
    console.log(`Trickedbot > ${member.username} has gained ${indexs} Points from typing`)
    }
point()
}
    }


)}
module.exports.config = {
  displayName: 'randompoint', // Can be changed any time
  dbName: 'randompoint', // Should be unique and NEVER be changed once set
  loadDBFirst: true,
}

