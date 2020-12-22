
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
  syntaxError: "",
  expectedArgs: "", 
  description: 'Shop!', 
  callback: async (message, args, text, client) => {
 const Embeds = new Discord.MessageEmbed()
			.setColor('#000000')
			.setTitle('Shop')
			.addFields(
				{ name: '\u200B', value: '\u200B' },
				{
					name: 'dagger',
					value:
						'```Useless dagger cool to have ig (5k)```',
					inline: false,
                },
                	{
					name: 'the investors gadget',
					value:
						'```Will double you !claim amount not wokring atm(50k)```',
					inline: false,
                },
                    	{
					name: 'beginner',
					value:
						'```:beginner: and :beginner: (5k) ```',
					inline: false,
                },
                        	{
					name: 'ice cream',
					value:
						'```get some icecream (300)```',
					inline: false,
                },
                 	{
					name: 'trickedbots soul',
					value:
						'```Collectable who doesnt want a soul of the perfect bot (500k)```',
					inline: false,
				
				},
				             	{
					name: 'commedy award',
					value:
						'```Perfect for the memers(42069)```',
					inline: false,
                },
                
            );
            message.reply(Embeds)

  }
        }