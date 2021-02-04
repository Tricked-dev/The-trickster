const Discord = require('discord.js');
const Enmap = require("enmap");
const ms = require("parse-ms");
const { exec } = require('child_process');
const { no, commafy } = require("../../utils/util.js");
const { eval } = require("../../subcommands/eval.js");
module.exports = {
	category: 'hidden',
	aliases: ['a'],
	minArgs: 0,
	maxArgs: -1,
	
	expectedArgs: '',
	description: 'abooze',
	callback: async ({message, args, client}) => {

    
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
        //
        //add a standart input
        let input = args.slice(1).join(' ');
        //
        if(args[0] == a1) {
        //eval code
        eval(message, input, client)
        } else if(args[0] == a2){
            //exec code
            exec(input, async (error, stdout, stderr) => {
            let output = ''
            if (error)   output = error
            if (stderr)  output = stderr
            if (stdout)  output = stdout
            


                    let Done = {
            title : `Exec`,
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
                var Msg = await message.channel.send(Embed); // sends message
                setTimeout(function (){
                    Embed.setColor('GREEN')
                    Msg.edit(Embed)
            }, 1000)
                setTimeout(function (){
                    Embed.setColor('PURPLE')
                    Msg.edit(Embed)
            }, 2000)
                setTimeout(function (){
                    Embed.setColor('ORANGE')
                    Msg.edit(Embed)
            }, 3000)
                setTimeout(function (){
                    Embed.setColor('PURPLE')
                    Msg.edit(Embed)
            }, 5000)
                setTimeout(function (){
                    Embed.setColor('RED')
                    Msg.edit(Embed)
            }, 6000)

            } 
                })
                // ik this is a bad way todo it improve on this if you read this thanks <3

        } else if(args[0] == a6){
            message.delete();
			message.channel.send(input);
        }
        
    }
}
// end of eval
