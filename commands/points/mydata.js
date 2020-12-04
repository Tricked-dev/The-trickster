 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 const sourcebin = require('sourcebin_js');
 module.exports = {
  cooldown: '2s',
  category: 'Points',
  aliases: [''],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'Send all your Enmap data in a dm', 
  callback: async (message, args, text, client) => {
    const infos = client.userProfiles.get(message.author.id)
    let info = JSON.stringify(infos,null,'\t')
    console.log(info)
    let name = message.author.username
/* sourcebin.create([
    {
        name: name,
        content: info,
        languageId: 'json'
    }
], {
    title: name,
    description: 'None'
})
    .then(message.reply)
    .catch(console.error);
*/
sourcebin.create([
    {
        name: name,
        content: info,
        languageId: 'json'
    }
], {
    title: name,
    description: "info of the user"
})
    .then(bin => message.author.send(`Your info: ${bin.url}`))
    .catch(console.error);  
    message.reply(`Name: ${bin.url} | Raw: ${bin.files[0].raw}`)
}
}