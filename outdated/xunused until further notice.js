const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js'); 
const db = require('quick.db')
const { MessageAttachment } = require('discord.js')
const Canvas = require("discord-canvas")
const path = require('path')
const canvacord = require('canvacord')//npm i canvacord in your terminal 
module.exports = {
aliases: [''],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "please mention somoene to trigger",
  expectedArgs: "please mention someone to trigger", 
  description: 'flip the coins', 
callback: async (message, args, client, prefix, instance) => {
 
 let member = message.mentions.members.first() || message.author

let bank = await db.fetch(`Points_${member.id}`)
if(!bank) {
  await  db.add(`Points_${member.id}`, `20`)
}
  if (bank === null) bank = 0;
const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('Points!')
        .setDescription(`**${member} has ${bank} Points!**`)
        .setColor('RED')
      message.reply(Embed);
   /*
   trrying to canvas lmaooo
   */
      
   
const canvacord = require("canvacord");
const img = `${member.user.displayAvatarURL}`
const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

const rank = new canvacord.Rank()
    .setAvatar(img)
    .setCurrentXP(bank)
    .setRequiredXP(bank)
    .setStatus("dnd")
    .setProgressBar("#FFFFFF", "COLOR")
    .setUsername("Snowflake")
    .setDiscriminator("0007");

rank.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, "RankCard.png");
        message.channel.send(attachment);
    });

    }
}