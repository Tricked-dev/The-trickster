const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
module.exports = {
    aliases: ['quest'],
  minArgs: 0,
  maxArgs: -1,
  syntaxError: "",
  expectedArgs: "", 
  description: 'quests', 
  callback: async (message, args, text, client, prefix, instance) => {
let quest = db.get(`${message.author.id}_quests`)


if(quest == 'rob') {
    message.channel.send('you have to rob someoene to complete this quest')
    return
}else if(quest == 'gamble'){
    message.channel.send('you got the quest gamble, gamble 1k points to finish it')
return
}else if(quest == 'share') {
    message.channel.send('you got the quest share share 1k points with a user to finish this quest')
    return
}else if(quest == '1'){
    message.channel.send(`you completed your quest and earned 250 points`)
    db.add(`points_${message.author.id}`, `250`)
    db.delete(`${message.author.id}_quests`)
    return
}else {

      let mins = Math.ceil(1);
    let maxs = Math.floor(4); 
    const index = Math.floor(
				Math.floor(Math.random() * (maxs - mins) + mins)
            );

console.log(index)

if(index == '4'){
        db.set(`${message.author.id}_quests`, `rob`) 
        message.channel.send('you have to rob someoene to complete this quest')
}else if(index == '2'){
        db.set(`${message.author.id}_quests`, `gamble`) 
        message.channel.send('you got the quest gamble, gamble 1k points to finish it')
}else if(index == '3'){
        db.set(`${message.author.id}_quests`, `share`) 
        message.channel.send('you got the quest share share 1k points with a user to finish this quest')
}
    
}

  }
}