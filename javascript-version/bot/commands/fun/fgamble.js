const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js'); 
module.exports = {
   category: 'Fun',
    aliases: [''],
  minArgs: 0,
  maxArgs: -1,

  expectedArgs: "", 
  description: 'Gamble your Points away', 
  callback: async ({message, args, text, client, prefix, instance}) => {
    let amount = args[0]

    let mamber = message.author
        if (isNaN(`${amount}`)) { // checking if number
    const Embed = new Discord.MessageEmbed()
    .setColor('#03fc49')
        .setTitle('Points!')
        .setDescription(`**Thats not a number!**`) // if no number
        .setColor('BLUE')
        message.reply(Embed);
        return
  }




    let min = Math.ceil(1);
    let max = Math.floor(3); 
    let indexs = Math.floor(
                
        Math.floor(Math.random() * (max - min) + min)
            );
    if(indexs == '2') {
          const Embed = new Discord.MessageEmbed()
        .setTitle('Points!')
        .setDescription(`**${amount} Points were lost in the gamble F**\nfun fact its a 50/50 chance to loose your coins`)
        .setColor('#FF0000')
        message.reply(Embed);
        

        return;
    }

  
        let misn = Math.ceil(20);
        let masx = Math.floor(120);
        let index = Math.floor(
                
        Math.floor(Math.random() * (masx - misn) + misn)
            );
            let amounts = (index / '100')

            let won = (amount * "2")

            let wons = won.toFixed(0)

            const Embed = new Discord.MessageEmbed()
         
            .setColor('#03fc49')
        .setTitle('Points!')
        .setDescription(`**${amount} Points were placed in your wallet**\n\n fun fact: It has been estimated that around 80 percent of the US population has gambled in their lifetime. Gambling can be done in various different ways and therefore is easy for people to access.`)
        .setColor('BLUE')
        message.reply(Embed);
      


}
}