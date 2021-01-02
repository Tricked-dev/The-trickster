const { exec } = require('child_process');
const Discord = require("discord.js")
module.exports = {
	aliases: ['neofetch'],
	category: 'hidden',
	minArgs: 0,
	maxArgs: -1,
	
	expectedArgs: '',
	description:
		'Trickedonly command until i find a way to make anyone with perms and me able to use it <3',
	callback: (message, args, text, client, prefix, instance) => {
			if (message.author.id == 336465356304678913) {
exec('screenfetch -w -p -t -N -n', async (error, stdout, stderr) => {
    if (error) {
        return   message.reply(`error: ${error.message}`);
    }
    if (stderr) {
        return   message.reply(`stderr: ${stderr}`);
    } else {
            let Embed = new Discord.MessageEmbed()
    .setTitle('Screenfetch')
    .setTimestamp()
    .setColor('RED')
    .setDescription(stdout)
    let newEmbed = new Discord.MessageEmbed()
    .setTitle('Screenfetch')
    .setTimestamp()
    .setColor('BLUE')
    .setDescription(stdout)
    let newEmbeds = new Discord.MessageEmbed()
    .setTitle('Screenfetch')
    .setTimestamp()
    .setColor('PURPLE')
    .setDescription(stdout)
    let newEmbedss = new Discord.MessageEmbed()
    .setTitle('Screenfetch')
    .setTimestamp()
    .setColor('GREEN')
    .setDescription(stdout)
    var Msg = await message.channel.send(Embed); // sends message
    setTimeout(function (){
        Msg.edit(newEmbed)
}, 1000)
    setTimeout(function (){
        Msg.edit(newEmbeds)
}, 2000)
    setTimeout(function (){
        Msg.edit(newEmbedss)
}, 3000)

}
    })

            } else {
                message.reply('sorry this command is made for tricked')
            }
        
        
    }
}