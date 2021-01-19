const config = require('../files/config.json');

const {client} = require('../index.js')
 const Discord = require("discord.js");
 const Enmap = require("enmap");
 const {MessageEmbed} = require('discord.js'); 

no = function(message, reason) {
        let botembed = new MessageEmbed()
        botembed.setTitle("Oops")
        botembed.setDescription(`❌ Sorry you cant do this cause: ${reason}`)
        botembed.setColor(config.color.red)
        return message.channel.send(botembed);
}
add = function(id, amount) {
        let bal = client.userProfiles.get(id, 'points')
        //
        bal = Number(bal)
        bal = (bal).toFixed(0)
        bal = Number(bal)
        //
        amount = Number(amount)
        amount = amount.toFixed(0)
        amount = Number(amount)
        //
        output = (bal + amount)
        console.log(output)
        //
        return client.userProfiles.set(id, output, 'points')
        

}
sub = function(id, amount) {
        let bal = client.userProfiles.get(id, 'points')
        //
        bal = Number(bal)
        bal = (bal).toFixed(0)
        bal = Number(bal)
        //
        amount = Number(amount)
        amount = amount.toFixed(0)
        amount = Number(amount)
        //
        output = (bal - amount)
        //
        return client.userProfiles.set(id, output, 'points')
        

}
servers = function(client) {
        	let content = "";
		let s = "";
    	client.guilds.cache.forEach((guild) => {
			let spaces = 98 - (`║ ⋙  ${guild.name} member's ${guild.memberCount}`).length
			s += 1
			if(s > Number(client.guilds.cache.size)-2){
				content += `\n║`

			} else {
				content += '║'
			}
			content += ` ⋙  ${guild.name} member's ${guild.memberCount}`

			for (i = 0; i < spaces; i++) { 
  			content += ' '
			}
			content += '║'
    })
    return content
}
presence = function(status, games, interval, client) {
                games instanceof Array && games.length > 0 &&
            client.user.setPresence({
                status,
                activity: {
                    name: games[0].name ? games[0].name : null,
                    type: games[0].type ? games[0].type : null,
                    url : games[0].url  ? games[0].url  : null
                }
            });

		games instanceof Array && games.length > 1 &&
		
            setInterval(() => {

		const index = Math.floor(Math.random() * (games.length));
				
                client.user.setActivity(games[index].name, {
                    type: games[index].type,
                    url : games[index].url || "https://www.twitch.tv/"
                });
            }, ((typeof interval === "number" && interval) || 30) * 1000);
}
guildadd = function(guild) {
                let content = ''
        console.log('╠═( Server Joined )════════════════════════════════════════════════════════════════════════════════╣')
        let spaces = 99 - (`║ server: ${guild} `).length
		content += `║ Server: ${guild}`
		for (i = 0; i < spaces; i++) { 
		  content += ' '
		}
		content += '║\n'
		let paces = 99 - (`║ Player: ${guild.owner.displayName} `).length
		content += `║ Player: ${guild.owner.displayName}`
		for (i = 0; i < paces; i++) { 
		  content += ' '
		}
		content += '║\n'
		let aces = 99 - (`║ People: ${guild.members.size}`).length
		content += `║ People: ${guild.members.size}`
		for (i = 0; i < aces; i++) { 
		  content += ' '
		}
                content += '║'
        return(content)
}
commafy = function ( num ) {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join(' ');
}
/*
no(message, "")
const { no, add, sub, presence,  servers, commafy} = require("../../utils/util.js");
*/
module.exports = { no, add, sub, servers, presence, commafy }