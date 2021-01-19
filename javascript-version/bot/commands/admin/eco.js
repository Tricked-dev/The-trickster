 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed} = require('discord.js'); 
 const ms = require("parse-ms");
 module.exports = {
  cooldown: '2s',
  aliases: [''],
  category: 'hidden',
  minArgs: 0,
  maxArgs: -1,
  expectedArgs: "", 
  description: 'Tricked only commands', 
  callback: async ({message, args, text, client}) => {
   if (message.author.id != 336465356304678913) {
         const Embed = new MessageEmbed()
        .setTitle('points!')
        .setDescription(`**This is a command made for tricked and him only**`) 
        .setColor('BLUE')
        return message.reply(Embed);
    }


const stats = ["commands", "points", "messages", "level", "iq", "gamerrate", "gayrate", "gamble", "items", "claim", "quest", "started", "daily", "temp", "hourly", "monthky", "rob", "work", "totalActions", "warnings", "kicks"]
//                                                                                                             


if(!args) return message.reply("You forgot to mention a group")
if(!stats.includes(args[0])) return message.reply("item not found")


 let amount = args.slice(2).join(" ");


let item = args[0].toLowerCase()


 let member = message.mentions.members.first()


 if(!member){

         message.reply('i believe you forgot to mention someone')
 }
 console.log(member + amount + args)


let fixed = {
title: "changed it",
description: `Changed ${member}'s ${item}(s) to ${amount}`,
footer: {
                text: `ez`,
		icon_url: '',
	},

}

client.userProfiles.set(member.id, amount, item);
return message.reply({embed: fixed})

}}
