 const enmap = require("enmap");
 const Enmap = require("enmap");
 module.exports = {
  cooldown: '2s',
  category: 'Points',
  aliases: [''],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'Shows the leaderboard of Points', 
  callback: async (message, args, text, client, prefix, instance, discord, Discord) => {
        const target = message.mentions.users.first() || message.author
        await client.userProfiles.set(target.id, 20, 'points');    
        points = await client.userProfiles.get(target.id, 'points');;
        message.reply(`You have ${points} warns, buddy!`);
}}