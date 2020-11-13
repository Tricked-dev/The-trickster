const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js'); 
const db = require('quick.db')
let sql = (`./../json.sqlite`)
const index = require(`../../index.js`);
module.exports = {
    aliases: ['lb', 'leaderboard'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "please mention somoene to trigger",
  expectedArgs: "please mention someone to trigger", 
    description: "Check the sever's leaderboard",
   
   async execute(message, args, text, client, prefix, instance) {
   

      let points = db.all().filter(data => data.ID.startsWith(`points_`)).sort((a, b) => b.data - a.data)
      let lead = db.all().filter(d => d.ID.startsWith('points_'))
      lead.length = 20;
      points.length = 20;
      let content = "";
        var i = 0;
        let indexnum = 0;



      let userid = await client.users.cache.get(points[i].ID.split("_")[1])

      let user = userid.tag

      let num = ++indexnum

        content0 += `${num}. ${user} - ${points[i].data}\n`
    
      

    const embed = new Discord.MessageEmbed()
    .setTitle(`**Global point leaderboard**`)
    .setDescription(`\`\`\`${content0}\n\`\`\``)
    
    .setColor("#FFFFFF")

    message.channel.send(embed)

  }

}


        


   
   
