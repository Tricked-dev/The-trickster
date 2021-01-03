 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 module.exports = {
  cooldown: '2s',
  aliases: [''],
  category: 'hidden',
  minArgs: 0,
  maxArgs: -1,

  expectedArgs: "", 
  description: 'Tricked only commands', 
  callback: async (message, args, text, client) => {
   if (message.author.id != 336465356304678913) {
         const Embed = new Discord.MessageEmbed() // talking
        .setTitle('points!')
        .setDescription(`**This is a command made for tricked and him only**`) 
        .setColor('BLUE')
        message.reply(Embed);
        return
    }


 let amounts = args[2];
 let arger = args.slice(2).join(" ");
 let amount =  parseInt(amounts)
 let member = message.mentions.members.first()
 let bal = await client.userProfiles.get(member.id, 'points')  


/*
          _   
 ___  ___| |_ 
/ __|/ _ \ __|
\__ \  __/ |_ 
|___/\___|\__|
*/
if(args[0] == 'set'){
        client.userProfiles.set(member.id, amount, 'points');
        const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**set ${member}'s balance to ${amount}**`)
        .setColor('BLUE')
        message.reply(Embed);
        return
/*
       _           
  __ _(_)_   _____ 
 / _` | \ \ / / _ \
| (_| | |\ V /  __/
 \__, |_| \_/ \___|
 |___/   
*/
    } else if (args[0] == 'give'){
      if (isNaN(`${amount}`)) { // checking if number
    const Embed = new Discord.MessageEmbed()
    .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**Thats not a number!**`) // if no number
        .setColor('BLUE')
        message.reply(Embed);
        return
  }     
        client.userProfiles.set(member.id, amount + bal, 'points');
        const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**added ${amount} to ${member}'s his balance is now ${amount + bal}**`)
        .setColor('BLUE')
        message.reply(Embed);
        return
/*
           _     _ 
  __ _  __| | __| |
 / _` |/ _` |/ _` |
| (_| | (_| | (_| |
 \__,_|\__,_|\__,_|

*/
} else if (args[0] == 'add'){
      if (isNaN(`${amount}`)) { // checking if number
    const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setDescription(`**Thats not a number!**`) // if no number
        .setColor(member.displayHexColor || 'BLUE')
        .setFooter("Epicly made trickedbot")
        .setTimestamp()
        message.reply(Embed);
        return
  }  
        client.userProfiles.set(member.id, amount + bal, 'points');
        const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**added ${amount} to ${member}'s his balance is now ${amount + bal}**`)
        .setColor('BLUE')
        message.reply(Embed);
        return
/*
     _      _      _       
  __| | ___| | ___| |_ ___ 
 / _` |/ _ \ |/ _ \ __/ _ \
| (_| |  __/ |  __/ ||  __/
 \__,_|\___|_|\___|\__\___|

*/
}else if(args[0] == 'delete'){
        client.userProfiles.delete(member.id, 'points');
        const Embed = new Discord.MessageEmbed()
        .setTitle('points!')
        .setDescription(`**Removed ${member}**`)
        .setColor(member.displayHexColor || 'BLUE')
        .setFooter("Epicly made trickedbot")
        .setTimestamp()
        message.reply(Embed);
        return
/*
 _ _                 
(_) |_ ___ _ __ ___  
| | __/ _ \ '_ ` _ \ 
| | ||  __/ | | | | |
|_|\__\___|_| |_| |_|

*/
} else if(args[0] == 'item'){
    let item = args.slice(2).join(' ')
    client.userProfiles.push(member.id, item, 'items');
        const Embed = new Discord.MessageEmbed()
        .setTitle('points!')
        .setDescription(`You have given ${member} a ${item}.\n hope they enjoy`)
        .setColor(member.displayHexColor || 'BLUE')
        .setFooter("Epicly made trickedbot")
        .setTimestamp()
        message.reply(Embed);
/*
          _   
 ___  ___| |_ 
/ __|/ _ \ __|
\__ \  __/ |_ 
|___/\___|\__|
              
*/
} else if(args[0] == 'set'){
        client.userProfiles.set(member.id, amount, 'points');
        const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**set ${member}'s balance to ${amount}**`)
        .setColor('BLUE')
        message.reply(Embed);
        return
/*
 _ __  _ __  
| '_ \| '_ \ 
| |_) | |_) |
| .__/| .__/ 
|_|   |_|  
*/
} else if (args[0] == 'pp'){    
        client.userProfiles.set(member.id, arger, 'pp');
        const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**made his pp: '${arger}' and ${member}'s his pp is now ${arger}**`)
        .setColor('BLUE')
        message.reply(Embed);
        return
/*
 _       
(_) __ _ 
| |/ _` |
| | (_| |
|_|\__, |
      |_| 
*/
} else if (args[0] == 'iq'){    
        client.userProfiles.set(member.id, arger, 'iq');
        const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**made his pp: '${arger}' and ${member}'s his pp is now ${arger}**`)
        .setColor('BLUE')
        message.reply(Embed);
        return
/*
                             _       
  __ _  __ _ _   _ _ __ __ _| |_ ___ 
 / _` |/ _` | | | | '__/ _` | __/ _ \
| (_| | (_| | |_| | | | (_| | ||  __/
 \__, |\__,_|\__, |_|  \__,_|\__\___|
 |___/       |___/    
*/
} else if (args[0] == 'gayrate'){    
        client.userProfiles.set(member.id, arger, 'gayrate');
        const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**made his pp: '${arger}' and ${member}'s his pp is now ${arger}**`)
        .setColor('BLUE')
        message.reply(Embed);
        return
/*
                                           _       
  __ _  __ _ _ __ ___   ___ _ __ _ __ __ _| |_ ___ 
 / _` |/ _` | '_ ` _ \ / _ \ '__| '__/ _` | __/ _ \
| (_| | (_| | | | | | |  __/ |  | | | (_| | ||  __/
 \__, |\__,_|_| |_| |_|\___|_|  |_|  \__,_|\__\___|
 |___/
*/
} else if (args[0] == 'gamerrate'){    
        client.userProfiles.set(member.id, arger, 'gamerrate');
        const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**made his pp: '${arger}' and ${member}'s his pp is now ${arger}**`)
        .setColor('BLUE')
        message.reply(Embed);
        return
      }
}}