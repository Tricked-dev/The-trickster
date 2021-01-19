 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const { MessageEmbed } = require('discord.js'); 
 const ms = require("parse-ms");
 const { no, add, sub } = require("../../utils/util.js");
 module.exports = {
  cooldown: '2s',
  category: 'Points',
  aliases: [''],
  minArgs: 0,
  maxArgs: -1,

  expectedArgs: "", 
  description: 'Gamble your life savings like every man would', 
  callback: async ({message, args, text, client}) => {
    let amounts = args[0]
    let amount = Number(amounts)
    let member = message.author
    let bank = await client.userProfiles.get(member.id, 'points');
    let mamber = message.author
        if (isNaN(`${amount}`)) { // checking if number
          no(message, "Thats not a number")
        return
  }
  
  if (amount < 100){ // checking if the bank doesng go below 0
    no(message, "You cant gamble less than 100 points")
        return }
  
    check = (bank - amount)
   
    
  if (check < 0){ // checking if the bank doesng go below 0
      no(message, `You cant gamble that much points you only have ${bank} points`)
        return } 
    let min = Math.ceil(1);
    let max = Math.floor(3); 
    let indexs = Math.floor(
                
        Math.floor(Math.random() * (max - min) + min)
            );
    if(indexs == '2') {
        sub(message.author.id, amount)  
          const Embed = new Discord.MessageEmbed()
        .setTitle('points!')
        .setDescription(`**${amount} points were lost in the gamble F**`)
        .setColor('#FF0000')
        return message.reply(Embed);
        
    }
let replies = ["Gambling is a BILLION dollar industry. In America, gambling has become a $40 billion dollar a year industry. Las Vegas alone brings in close to 10 billion dollars a year from people gambling at their casinos and placing bets.", "It is common for people to blame certain types of gambling methods, such as lotteries, casinos, and racetracks for causing compulsive gambling, but gambling problems are not caused from gambling being easily attainable, they are caused from a person’s inability to control their gambling habits. There are far more people who gamble on occasion than there are people who are compulsive gamblers.", "It has been estimated that around 80 percent of the US population has gambled in their lifetime. Gambling can be done in various different ways and therefore is easy for people to access.", "Pathological gamblers are significantly more likely to have mental health disorders and/or substance use disorders.", "A research study found that 75% of gamblers had an alcohol disorder, 38% had a drug use disorder, and 60% were nicotine dependent.", "50% of gamblers have experienced a mood disorder, 41.3% had experienced an anxiety disorder, and 60.8% had experienced a personality disorder.", "Men are more likely to develop a gambling problem than women.", "It is estimated that three to four percent of the American population has a gambling problem; this is approximately between six to eight million people.", "The last gambling addiction fact to remember is that compulsive gambling does not mean that you are a weak person. Many people who have become problem gamblers are very successful and are seen by others as strong and intelligent people"];
    
    let result = Math.floor((Math.random() * replies.length));
            add(member.id, amount)
            const Embed = new Discord.MessageEmbed()
         
            .setColor('#03fc49')
        .setTitle('points!')
        .setDescription(`**${amount} points were placed in your wallet**\n\n fun fact: ${replies[result]}`)
        .setColor('BLUE')
        message.reply(Embed);
            
    if (amount > 999) {
       let quest =  client.userProfiles.get(member.id, 'quest'); 
    if(quest == 'gamble'){
       client.userProfiles.set(member.id, 1, 'quest');
    }
  }


}
}