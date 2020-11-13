const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js'); 
const { max } = require('mathjs');
const db = require('quick.db')
const talkedRecently = new Set();
module.exports = async (client, set, map) => {
client.on('message', message => {


  let mins = Math.ceil(1);
    let maxs = Math.floor(100); 
    const index = Math.floor(
				Math.floor(Math.random() * (maxs - mins) + mins)
            );
if(index == '50'){
async function point() {
    let member = message.author
    let min = Math.ceil(1);
    let max = Math.floor(30); 
    const indexs = Math.floor(
                
        Math.floor(Math.random() * (max - min) + min)
            );
    db.add(`points_${member.id}`, `${indexs}`)

    let bank = await db.fetch(`points_${member.id}`)

  if (bank === null) bank = 0;
const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('Points!')
        .setDescription(`**${member} has gained ${indexs} points while typing and has ${bank} Points!**`)
        .setColor('PURPLE')
	  message.reply(Embed);
    console.log(`Trickedbot > ${member} has gained ${indexs} points from typing`)
    }
point()
}
    }


)}

