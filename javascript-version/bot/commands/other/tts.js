const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
	category: 'Other',
	aliases: [''],
	minArgs: 0,
	maxArgs: -1,
	
	expectedArgs: '',
	description: 'Make the bot say something (usefull for thing)',
	callback: async (message, args, client, prefix, instance, broke) => {
        if (!args[0])
      return message.channel.send(
        "**Please Enter Something To Convert To Speech!**"
      );
    let text = args.join(" ");
    const dispatcher = connection.play('https://translate.google.com/translate_tts?ie=UTF-8&q=Hello%20World&tl=en&total=1&idx=0&textlen=11&tk=539567.982175&client=t&prev=input&ttsspeed=1');

    dispatcher.on('start', () => {
      console.log('audio.mp3 is now playing!');
    });
    
    dispatcher.on('finish', () => {
      console.log('audio.mp3 has finished playing!');
    });
  
    
  }
    
}