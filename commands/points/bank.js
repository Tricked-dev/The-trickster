const Discord = require('discord.js');
const client = new Discord.Client();
const Canvas = require('canvas');
const path = require('path')
const { MessageEmbed } = require('discord.js'); 
const db = require('quick.db')
module.exports = {
	cooldown: '2s',
	category: 'Points',
	aliases: ['bal', 'Points', 'balance'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "mention someone to scout the bank otherwise it will show yours",
  expectedArgs: "mention someone to scout the bank otherwise it will show yours", 
    description: "Check your balance",

    async execute(message, args) {
     let member = message.mentions.members.first() || message.author
        
     
     


	 let np = await db.fetch(`pass_${member.id}`)
	 

	 
let bank = await db.fetch(`points_${member.id}`)
	 if (bank === null) {
		 db.add(`points_${member.id}`, '1')
	 }

if(args[0]) {
	 

	  const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('Points!')
        .setDescription(`**${member} has ${bank} Points!**`)
        .setColor('RED')
	  message.reply(Embed);
	  return
}

     const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	    const background = await Canvas.loadImage(
      path.join(__dirname, '../background.jpg')
    )
    let x = 0
    let y = 0
    ctx.drawImage(background, x, y)

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Points of ${member.username}`, canvas.width / 2.5, canvas.height / 3.5);


    ctx.font = '24px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.username} Has ${bank} Points!`, canvas.width / 3.1, canvas.height / 1.1);
	
	if(np) {
	ctx.font = '24px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.username} Has ${np} n-passe(s)!`, canvas.width / 3.1, canvas.height / 1.5);
		}

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	message.channel.send(attachment);
}
}