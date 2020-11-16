const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
module.exports = {
    aliases: ['hourly'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'get your hourly points', 
  callback: async (message, args, text, client, prefix, instance) => {
   let item =   db.get(`${message.author.id}_items`)
   message.channel.send(item)


  }
}