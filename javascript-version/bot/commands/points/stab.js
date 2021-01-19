 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
const { no, add, sub, presence,  servers, commafy} = require("../../utils/util.js");
 module.exports = {
  cooldown: '5m',
  category: 'Points',
  aliases: [''],
  minArgs: 0,
  maxArgs: -1,

  expectedArgs: "", 
  description: '25% discount robs', 
  callback: async ({message, args, text, client}) => {

        let goalitem = 'Dagger'
    let item = client.userProfiles.get(message.author.id, "items")
    if(!item.includes(goalitem)) {
        return message.reply('You dont own a dagger')
    }


        for( var i = 0; i < item.length; i++){ 
    
        if ( item[i] == 'Dagger') { 
    
            item.splice(i, 1); 
        }
    
    }
    
   let timeout = 300000 // 24 hours in milliseconds, change if you'd like.
    let attack = message.mentions.members.first()
    let member = message.author

    let rob = await client.userProfiles.get(member.id, 'rob');

     if (rob !== null && timeout - (Date.now() - rob) > 0) {
        let time = ms(timeout - (Date.now() - rob));
              const Embed = new Discord.MessageEmbed() // talking
        .setTitle('points!')
        .setDescription(`You already robbed someone\n\nyou can come back and scam someone in **${time.hours}h ${time.minutes}m ${time.seconds}s**!`) 
        .setColor('#FF0000')
        message.reply(Embed);
        return
    } else {
   

    let targetuser = await client.userProfiles.get(attack.id, 'points'); // fetch mentioned users balance
    let num = (targetuser * 0.15)
    let author = await client.userProfiles.get(member.id, 'points'); // fetch authors balance
    if(`${targetuser}` === `${author}`) {
    return no(message, "Sorry you cant rob yourself")
    }

    if (author < num) { // if the authors balance is less than 250, return this.
        return no(message, `:x: You need atleast ${commafy(num.toFixed(0))}$ to rob that user`);
    }

    if (targetuser < 50) { // if mentioned user has 0 or less, it will return this.
        return no(message, `:x: ${attack.user.username} does not have anything to rob.`)
    }

    const coin = [
    `0`,      
    `1`,
    `2`,
		];
  
    const index = Math.floor(
				Math.random() * (coin.length - 1) + 1
            );
    if(index == '2') {
        message.channel.send(`Your robbery failed and instead you lost ${num.toFixed(0)} point good job!`)
        client.userProfiles.set(message.author.id, item, "items")
        sub(message.author,id, num)
        add(attack.id, num)
        client.userProfiles.set(message.author.id, Data.now(), 'rob');
        return;
    }
    let cn = (`${targetuser}` / '3')
    let random = Math.floor(Math.random() * `${cn}`) + 1;


    const embed = new Discord.MessageEmbed()
    .setDescription(`${message.author} you robbed ${attack} and got away with ${random}!`)
    .setColor("GREEN")
    .setTimestamp()
    message.channel.send(embed)
    client.userProfiles.set(message.author.id, item, "items")
       let quest =  client.userProfiles.get(author.id, 'quest'); 
    if(quest == 'rob'){
       client.userProfiles.set(member.id, 1, 'quest');
    }

    add(message.authod.id, random)
    sub(attack.id, random)
    client.userProfiles.set(member.id, Data.now(), 'rob');

}
  }


}