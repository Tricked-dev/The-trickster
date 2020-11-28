const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
module.exports = {
    aliases: ['sp'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'get your hourly points', 
  callback: async (message, args, text, client, prefix, instance) => {
      let item =  args.slice(0).join(' ').toLowerCase()
  }
}