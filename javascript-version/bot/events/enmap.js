 const Discord = require('discord.js');
const client = new Discord.Client();
const Enmap = require("enmap");

module.exports = (client, prefix, message, command) => {
 client.on("message", message => {
client.userProfiles.ensure(message.author.id, {
    id: message.author.id,
    points: 0,
    iq: 0,
    gamerrate: 0,
    gayrate: 0,
    gamble: 0,
    items: [],
    claim: 0,
    quest: '',
    started: 0,
    daily: 0,
    temp: 0,
    hourly: 0,
    monthly: 0,
    rob: 0,
    work: 0,
 })
 if(message.guild === null) return
 client.guild.ensure(message.guild.id, {
    id: message.guild.id,
 }) 

}
 )
}

module.exports.config = {
  displayName: 'enmap', // Can be changed any time
  dbName: 'enmap', // Should be unique and NEVER be changed once set
  loadDBFirst: true,
}
/**
 * 
 * id: message.author.id,
    commands: 0,
    points: 0,
    messages: 0,
    level: 0,
    iq: 0,
    gamerrate: 0,
    gayrate: 0,
    gamble: 0,
    items: [],
    claim: 0,
    quest: '',
    started: 0,
    daily: 0,
    temp: 0,
    hourly: 0,
    monthly: 0,
    rob: 0,
    work: 0,
    totalActions: 0,
    warnings: [],
    kicks: []
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */