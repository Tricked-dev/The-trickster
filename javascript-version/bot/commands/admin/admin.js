const Discord = require('discord.js');
const client = new Discord.Client();
const Enmap = require("enmap");
const ms = require("parse-ms");
module.exports = {
	category: 'hidden',
	aliases: ['a'],
	minArgs: 0,
	maxArgs: -1,
	
	expectedArgs: '',
	description: 'abooze',
	callback: async ({message, args}) => {
    if (!message.author.id == 336465356304678913) {
    const adminOnly = {
            title : `Oops!`,
            description :`Only tricked can use this command`,
            color : `BLACK`
    }
    try{
    return message.channel.send({embed: adminOnly}); 
    } catch (error) {error;}
			return;
        }
        // Time taken ${client.ws.ping}ms
        // add some reminders
        const a1 = 'eval'
        const a2 = "exec"
        const a3 = "blacklist"
        const a4 = "delete"
        const a5 = "screenfetch"
        const a6 = "sudo"
        //
        // add client
        const client = this.client;
        //
        //add a standart input
        const input = args.slice(1).join(' ');
        //
        if(args[0] == a1) {
        //eval code



		try {
			eval(input);
		} catch (err) {
            let Done = {
            title : `Eval`,
            color : `BLACK`,
            fields : [{
                name  : "🍞Input",
                value : [
                    "```js",
                    input,
                    "```"
                ].join("\n")
            },
            {
                name  : "🫓Output",
                value : [
                    "```js",
                    err,
                    "```"
                ].join("\n")
            }
            ]
            }
            try{
            return message.channel.send({embed: Done}); 
            } catch (error) {error;}

		} finally {
            let Done = {
            title : `Eval`,
            color : `BLACK`,
            fields : [{
                name  : "🍞Input",
                value : [
                    "```js",
                    input,
                    "```"
                ].join("\n")
            },
            {
                name  : "🫓Output",
                value : [
                    "```js",
                    eval(input),
                    "```"
                ].join("\n")
            }
            ]
            }
            try{
            return message.channel.send({embed: Done}); 
            } catch (error) {error;}
        }
        //
        } else if(args[0] == a2){
            //exec code
            const { exec } = require("child_process");
            exec(input, async (error, stdout, stderr) => {
            let output = ''
            if (error)   output = error
            if (stderr)  output = stderr
            if (stdout)  output = stdout
            


                    let Done = {
            title : `Eval`,
            color : `BLACK`,
            fields : [{
                name  : "🍞Input",
                value : [
                    "```bash",
                    input,
                    "```"
                ].join("\n")
            },
            {
                name  : "🫓Output",
                value : [
                    "```bash",
                    output,
                    "```"
                ].join("\n")
            }
            ]
            }
            try{
            return message.channel.send({embed: Done}); 
            } catch (error) {error;}
        })
            

        
        } else if(args[0] == a3) {

        } else if(args[0] == a4) {
        //message delete command
            let id = args[1];

				let msg = await message.channel.messages.fetch(id);

				msg.delete();

				if (args[2] !== '-s') {
					const Embed = new Discord.MessageEmbed()
						.setColor('#03fc49')
						.setTitle(`Message deleted!`);
					message.reply(Embed);
					message.member.delete();
				}
        } else if(args[0] == a5) {
                        exec('screenfetch -w -p -t -N -n', async (error, stdout, stderr) => {
                if (error) {
                    return   message.reply(`error: ${error.message}`);
                }
                if (stderr) {
                    return   message.reply(`stderr: ${stderr}`);
                } else {
                        let Embed = new Discord.MessageEmbed()
                .setTitle('Screenfetch')
                .setTimestamp()
                .setColor('RED')
                .setDescription(stdout)
                let newEmbed = new Discord.MessageEmbed()
                .setTitle('Screenfetch')
                .setTimestamp()
                .setColor('BLUE')
                .setDescription(stdout)
                let newEmbeds = new Discord.MessageEmbed()
                .setTitle('Screenfetch')
                .setTimestamp()
                .setColor('PURPLE')
                .setDescription(stdout)
                let newEmbedss = new Discord.MessageEmbed()
                .setTitle('Screenfetch')
                .setTimestamp()
                .setColor('GREEN')
                .setDescription(stdout)
                var Msg = await message.channel.send(Embed); // sends message
                setTimeout(function (){
                    Msg.edit(newEmbed)
            }, 1000)
                setTimeout(function (){
                    Msg.edit(newEmbeds)
            }, 2000)
                setTimeout(function (){
                    Msg.edit(newEmbedss)
            }, 3000)

            } 
                })
                // ik this is a bad way todo it improve on this if you read this thanks <3

        } else if(args[0] == a6){
            message.delete();
			message.channel.send(input);
        }
    }
}