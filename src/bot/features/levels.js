const Discord = require('discord.js');
const client = new Discord.Client();
const Enmap = require("enmap");
lev = require('../levelchard.json')
module.exports = async (client, prefix, message, command) => {
    client.on("message", async message => {
let messages = await client.userProfiles.get(message.author.id, 'messages');
let ss = await client.userProfiles.get(message.author.id, 'level');
//begin of leveling code
await client.userProfiles.math(message.author.id, '+', 1, 'messages');
let level;
if(messages == lev.levels[0].e) level = 1
else if(messages == lev.levels[1].e) level = 2
else if(messages == lev.levels[2].e) level = 3
else if(messages == lev.levels[3].e) level = 4
else if(messages == lev.levels[4].e) level = 5
else if(messages == lev.levels[5].e) level = 6
else if(messages == lev.levels[6].e) level = 7
else if(messages == lev.levels[7].e) level = 8
else if(messages == lev.levels[8].e) level = 9
else if(messages == lev.levels[9].e) level = 10
if(!level) return
else {
    await client.userProfiles.set(message.author.id, level, 'level');
}
})
}