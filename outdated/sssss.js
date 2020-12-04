const Discord = require('discord.js');
const client = new Discord.Client();
const Statcord = require("statcord.js");
const prefix = '!'
module.exports = async (statcord) => {
client.on("ready", async () => {
    statcord.autopost();
});


client.on("message", async (message) => {
    if (message.author.bot) return;
    if (message.channel.type !== "text") return;

    if (!message.content.startsWith(prefix)) return;

	let command = message.content.split(" ")[0].toLowerCase().substr(prefix.length);
    statcord.postCommand(command, message.author.id);
    }
);



statcord.on("post", status => {
    if (!status) console.log("Trickedbot > status posted");
    else console.error(status);
});

}

