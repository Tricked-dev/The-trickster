const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = (client, statcord) => {
statcord.on("post", status => {
    // status = false if the post was successful
    // status = "Error message" or status = Error if there was an error
    if (!status) console.log("Successful post");
    else console.error(status);
}
)}