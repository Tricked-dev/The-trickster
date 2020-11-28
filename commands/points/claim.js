const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js'); 
const ms = require("parse-ms");
const db = require('quick.db')
module.exports = {
  aliases: [''],
  category: 'Points',
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'Shows the leaderboard of points', 
  callback: async (message, args, text, client, prefix, instance) => {
    let newrs = await db.fetch(`started_${message.author.id}`)
    if (newrs !== '1') {
      message.channel.send(`points will now start flooding next time you do !claim`)
    db.set(`claim_${message.author.id}`, Date.now())
    db.set(`started_${message.author.id}`, '1')
    return
    }
    let bank = await db.fetch(`points_${message.author.id}`)
    let news = await db.fetch(`claim_${message.author.id}`)
    let pp = Date.now()
    let points = (pp - news)
    
    
    
    
    if(bank > '400000') {
    if(db.has(`${message.author.id}_items`, 'the investors gadget')){
      let amount = (points / 5000). toFixed(0)
      db.set(`temp${message.author.id}`, amount)
    } else {
      let amount = (points / 10000). toFixed(0)
      db.set(`temp${message.author.id}`, amount)
    }
  } else if(bank > '200000') {
    if(db.has(`${message.author.id}_items`, 'the investors gadget')){
      let amount = (points / 10000). toFixed(0)
      db.set(`temp${message.author.id}`, amount)
    } else {
      let amount = (points / 20000). toFixed(0)
      db.set(`temp${message.author.id}`, amount)
    }
    } else if(bank > '100000') {
    if(db.has(`${message.author.id}_items`, 'the investors gadget')){
      let amount = (points / 15000). toFixed(0)
      db.set(`temp${message.author.id}`, amount)
    } else {
      let amount = (points / 30000). toFixed(0)
      db.set(`temp${message.author.id}`, amount)
    }
      } else if(bank > '50000') {
    if(db.has(`${message.author.id}_items`, 'the investors gadget')){
      let amount = (points / 20000). toFixed(0)
      db.set(`temp${message.author.id}`, amount)
    } else {
      let amount = (points / 40000). toFixed(0)
      db.set(`temp${message.author.id}`, amount)
    }
      } else if(bank > '25000') {
    if(db.has(`${message.author.id}_items`, 'the investors gadget')){
      let amount = (points / 40000). toFixed(0)
      db.set(`temp${message.author.id}`, amount)
    } else {
      let amount = (points / 80000). toFixed(0)
      db.set(`temp${message.author.id}`, amount)
    }
      } else if(bank > '200000') {
    if(db.has(`${message.author.id}_items`, 'the investors gadget')){
      let amount = (points / 60000). toFixed(0)
      db.set(`temp${message.author.id}`, amount)
    } else {
      let amount = (points / 120000). toFixed(0)
      db.set(`temp${message.author.id}`, amount)
    }
  }
  let amount = await db.fetch(`temp${message.author.id}`)
    const Embed = new Discord.MessageEmbed()
        .setTitle('points!')
        .setDescription(`**${amount} points were given to you by !claim enjoy!**`)
        .setColor('GREEN')
    message.reply(Embed);    
db.add(`points_${message.author.id}`, amount)
db.set(`claim_${message.author.id}`, Date.now())
    }
}
