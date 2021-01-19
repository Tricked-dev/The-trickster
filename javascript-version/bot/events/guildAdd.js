const Discord = require('discord.js');
const client = new Discord.Client();
const Enmap = require("enmap");
const {guildadd} = require("../utils/util.js")

module.exports = (client, prefix, message, command) => {
    client.on('guildCreate', guild => {
		console.log(guildadd(guild))
    })
}
module.exports.config = {
  displayName: 'guildAdd', // Can be changed any time
  dbName: 'new_servers', // Should be unique and NEVER be changed once set
  loadDBFirst: true,
}