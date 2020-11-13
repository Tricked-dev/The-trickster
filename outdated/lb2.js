const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js'); 
const db = require('quick.db')
module.exports = {
  aliases: [''],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'Shows the leaderboard of points', 
  callback: async (message, args, text, client, prefix, instance) => {
let msgs = db.all().filter(data => data.ID.startsWith(`points_`)).sort((a, b) => b.data - a.data)
console.log(msgs)        
msgs.length = 20;
        var content = "";
        var i = 0;
        let indexnum = 0;
  for (let i = 0; i < msgs.length; i++){
        let userid = await client.users.cache.get(msgs[i].ID.split("_")[1])

        let user = userid.tag
        let Messages = msgs[i].data.toLocaleString()
        let num = ++indexnum

          content += `${i+1}. ${user} - ${Messages} \n`;


        const embed = new Discord.MessageEmbed()
        .setTitle(`**${message.guild.name}'s Leaderboard**`)
        .setDescription(`\`\`\`${content}\n\`\`\``)
        .setColor("#2C2F33")
         
        message.channel.send(embed)
 }
    }
}