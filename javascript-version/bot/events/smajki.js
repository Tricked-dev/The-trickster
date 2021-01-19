const Discord = require('discord.js');
const client = new Discord.Client();
const Enmap = require("enmap");
const {guildadd} = require("../utils/util.js")

module.exports = (client, prefix, command) => {
    client.on('message', message => {
if(message.guild.id == 701833606280118282) {

if(message.content.toLowerCase().includes('smajki') || message.content.toLowerCase().includes('smajk')) {
message.react('786270601857728583')
message.react('786270602151067698')
message.react('786270602532749352')
message.react('786270602423173131')
message.react('786270602860167218')
message.react('786270603061493770')
}

if(message.content.toLowerCase().includes('ege') || message.content.toLowerCase().includes('ege')) {
message.react('786270668697501730')
message.react('786270668668796978')
message.react('786270668023005205')
message.react('786270667883937852')
message.react('786270667070636034')
message.react('786270666726047816')
    
}

}else return

}
)}
module.exports.config = {
  displayName: 'guildAdd', // Can be changed any time
  dbName: 'new_servers', // Should be unique and NEVER be changed once set
  loadDBFirst: true,
}