const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");
module.exports = {
  aliases: [''],
  minArgs: 1,
  maxArgs: -1,
  syntaxError: "please use ```!work <prostitute/constructor/programmer/scammer/monkey>```",
  expectedArgs: "please use ```!work <prostitute/constructor/programmer/scammer/monkey>```", 
  description: 'Work for points OwO', 
  callback: async (message, args, text, client, prefix, instance) => {
    
    
    let timeout = 1200000

    let work = await db.fetch(`work_${message.author.id}`);

    if (work !== null && timeout - (Date.now() - work) > 0) {
        let time = ms(timeout - (Date.now() - work));
              const Embed = new Discord.MessageEmbed() // talking
        .setTitle('Points!')
        .setDescription(`You have already worked\n\nyou can come back and work again in **${time.hours}h ${time.minutes}m ${time.seconds}s**!`) 
        .setColor('#FF0000')
        message.reply(Embed);
        return
    } else {
    var jobs = ["prostitute", "constructor", "programmer", "monkey", "scammer"];
    if(!jobs.includes(args[0])) {
        return message.channel.send(`thats not a job!`)
    }
        if (args[0] == 'prostitute') {

        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a prostitute & got payed ${amount}$ for having sex! :D`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`points_${message.author.id}`, amount)
    } else if(args[0] == 'constructor') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a constructor & got payed ${amount}$ for rebuilding the empire state building.`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`points_${message.author.id}`, amount)
    } else if(args[0] == 'programmer') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. change to whatever you'd like

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a programmer for epicgames, you fixed their game & earned ${amount}$!`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`points_${message.author.id}`, amount)
      
    
    } else if(args[0] == 'monkey') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. change to whatever you'd like

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, You were a ape & earned ${amount}$!`)
        .setColor("RANDOM")
        message.channel.send(embed)
        message.channel.send('OO AA OO AA OO AA')
        db.add(`points_${message.author.id}`, amount)
    } else if(args[0] == 'scammer') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. change to whatever you'd like

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, You scammed a little kid & earned ${amount}$!`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`points_${message.author.id}`, amount)
      
    
    }
    db.set(`work_${message.author.id}`, Date.now())
}



  }


    // simple work command
    /*
    let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number.
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.tag}, it payed off!`, message.author.displayAvatarURL) 
    .setDescription(`${message.author}, you've worked and earned ${amount}$ !`)
    .setColor("RANDOM")
    
    message.channel.send(embed)
    db.add(`points_${message.author.id}`, amount)
    */


}
