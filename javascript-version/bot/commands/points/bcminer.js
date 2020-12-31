 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 module.exports = {
  cooldown: '2s',
  category: 'Points',
  aliases: [''],
  minArgs: 0,
  maxArgs: -1,

  expectedArgs: "", 
  description: 'Quick maths', 
  callback: async (message, args, text, client) => {
if(message.author.bot) return;


  let min = Math.ceil(1);
    let max = Math.floor(100); 
    const low1 = Math.floor(
				Math.floor(Math.random() * (max - min) + min)
            );
    const low2 = Math.floor(
				Math.floor(Math.random() * (max - min) + min)
            );
    const low3 = Math.floor(
				Math.floor(Math.random() * (max - min) + min)
            );

  let mins = Math.ceil(100);
    let maxs = Math.floor(200); 
    const high1 = Math.floor(
				Math.floor(Math.random() * (maxs - mins) + mins)
            );
    const high2 = Math.floor(
			Math.floor(Math.random() * (maxs - mins) + mins)
            );
    const high3 = Math.floor(
			Math.floor(Math.random() * (maxs - mins) + mins)
            );
  let minss = Math.ceil(1);
    let maxss = Math.floor(3); 
    const verylow1 = Math.floor(
				Math.floor(Math.random() * (maxs - mins) + mins)
            );
      

const answer = [
high1+low1,
high2*verylow1,
high3-low3,
low2+low3-low1,
high3+low3,
high2*high1
]

const questions = [
  `What is ${high1} + ${low1}`,
  `What is ${high2} * ${verylow1}`,
  `What is ${high3} - ${low3}`,
  `What is ${low2} - ${low3} - ${low2}`,
  `What is ${high3} + ${low3}`,
  `What is ${high2} * ${high1}`,
]

if(message.author.id == 336465356304678913) {
  message.author.send(high1+low1)
  message.author.send(high2*low2)
  message.author.send(high3-low3)
}

let counter = 0
let score = 0
const filter = m => m.author.id === message.author.id

const collector = new Discord.MessageCollector(message.channel, filter, {
  max: questions.length,
  time: 1000 * 150
})
message.channel.send(questions[counter++])
collector.on('collect', (m) => {
  if (counter < questions.length) {
    m.channel.send(questions[counter++])
  }
})

collector.on('end', (collected) =>{

let counter = 0
collected.forEach(value => {
  let item = Number(value.content)
  if(answer[counter++] == item){
    score += 1
  }

});
let amount = score*300
if(score == 0) {
  message.reply('You didnt get a single answer right betterluck next time')
  return
}
message.reply(`you got a whopping ${score} answers right i'll give you ${amount} points for that`)
client.userProfiles.math(message.author.id, '+', amount, 'points');
})


    }
  }
