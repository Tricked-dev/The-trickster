/*
// 798639694086668338
const Discord = require('discord.js');
const client = new Discord.Client();
const Enmap = require("enmap");
const {guildadd} = require("../utils/util.js")

module.exports = (client, prefix, message) => {
client.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel


  if(oldUserChannel === undefined && newUserChannel !== undefined) {
    console.log("someone joined a vc")
     // User Joins a voice channel

  } else if(newUserChannel === undefined){
    console.log("someone left a vc")
    // User leaves a voice channel

  }
})

}
module.exports.config = {
  displayName: 'guildAdd', // Can be changed any time
  dbName: 'new_servers', // Should be unique and NEVER be changed once set
  loadDBFirst: true,
}
*/