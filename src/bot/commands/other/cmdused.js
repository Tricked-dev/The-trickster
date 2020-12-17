 const Discord = require("discord.js") 
 const Enmap = require("enmap") 
 const { MessageEmbed } = require('discord.js')  
 const ms = require("parse-ms") 
 module.exports = {
  cooldown: '2s',
  category: 'Other',
  aliases: ['commandsused'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'Shows the leaderboard of Points', 
  callback: async (message, args, text, client) => {
        
let commands = client.userProfiles.get(message.author.id, 'commands');


       message.channel.send(`you used ${commands} commands's`)
    }
}