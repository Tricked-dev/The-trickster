 const Discord = require('discord.js');
const client = new Discord.Client();
const Enmap = require("enmap");
const ms = require("parse-ms");
const { exec } = require('child_process');
const { no } = require("../../utils/util.js");
const { get } = require("snekfetch");
module.exports = {
	category: 'hidden',
	aliases: ['b'],
	minArgs: 0,
	maxArgs: -1,
	expectedArgs: '',
	description: 'abooze',
	callback: async ({message, args}) => {
 if (message.author.id != 336465356304678913) return
if (!message.channel.nsfw) return message.reply("🔞", "Cannot display NSFW content in a SFW channel.");
    const msg = await message.channel.send(`:eyes:`);
    const { body } = await get("http://api.oboobs.ru/boobs/0/1/random");
    await msg.edit({
      embed: {
        "title": "Click here if the image failed to load.",
        "url": `http://media.oboobs.ru/${body[0].preview}`,
        "color": 6192321,
        "image": {
          "url": `http://media.oboobs.ru/${body[0].preview}`
        },
        "footer": {
          "icon_url": message.author.displayAvatarURL({ format: "png", size: 32 }),
          "text": `Requested by ${message.author.tag} | Powered by oboobs.ru`
        }
      }
    });
}
}