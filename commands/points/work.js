 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 module.exports = {
  cooldown: '2s',
  category: 'Points',
  aliases: [''],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'Work as a people', 
  callback: async (message, args, text, client) => {
    
    
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
         let bal = await client.userProfiles.get(message.author.id, 'points')  
client.userProfiles.set(message.author.id, bal + amount, 'points');
    } else if(args[0] == 'constructor') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a constructor & got payed ${amount}$ for rebuilding the empire state building.`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
         let bal = await client.userProfiles.get(message.author.id, 'points')  
client.userProfiles.set(message.author.id, bal + amount, 'points');
    } else if(args[0] == 'programmer') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. change to whatever you'd like

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a programmer for epicgames, you fixed their game & earned ${amount}$!`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
         let bal = await client.userProfiles.get(message.author.id, 'points')  
client.userProfiles.set(message.author.id, bal + amount, 'points');
      
    
    } else if(args[0] == 'monkey') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. change to whatever you'd like

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, You were a ape & earned ${amount}$!`)
        .setColor("RANDOM")
        message.channel.send(embed)
        message.channel.send('OO AA OO AA OO AA')
         let bal = await client.userProfiles.get(message.author.id, 'points')  
client.userProfiles.set(message.author.id, bal + amount, 'points');
    } else if(args[0] == 'scammer') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. change to whatever you'd like

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, You scammed a little kid & earned ${amount}$!`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
         let bal = await client.userProfiles.get(message.author.id, 'points')  
client.userProfiles.set(message.author.id, bal + amount, 'points');
      
    
    }
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
     let bal = await client.userProfiles.get(message.author.id, 'points')  
client.userProfiles.set(message.author.id, bal + amount, 'points');
    */



