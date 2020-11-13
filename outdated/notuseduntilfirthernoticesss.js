    
const { MessageEmbed } = require("discord.js");
const moment = require(`moment`);

moment.locale("EN");
module.exports = {
	aliases: [``],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: ``,
	expectedArgs: ``,
    description: `Show uptime of the bot!`,
    	callback: (message, args, text, client, prefix, instance) => {
 let member = message.mentions.members.first() || message.author;
 let user = message.mentions.members.first() || message.author;
  const status = {
    online: "<a:478870259944783873:747145811447513181> Online",
    idle: "<a:478870515730087939:747145811430735874> Idle",
    dnd: "<a:478869699455746049:747145811527204956> Do Not Disturb",
    offline: "<a:478870457848823818:747145811917537413> Invisible"
  }
  const embed = new MessageEmbed()
  .setColor(0xe43333)
  .setAuthor(`User statistics ${member.user.username}`,  member.user.displayAvatarURL())
  .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
  .addField(`:arrow_forward: ➡️ >  **> Name:** `, `${member.user.username}#${member.user.discriminator}`)
  .addField(`:arrow_forward: ➡️ >  **> ID:** `, member.id)
  .addField(`:arrow_forward: ➡️ >  **> Status:** `, `${user.presence.status}`)
  .addField(`:arrow_forward: ➡️ >  **> Game activity**:video_game:  `, `${member.user.presence.game ? `${message.author.presence.activities[0].state}` : "Not playing a game !"}`, true)
  .addField(`:arrow_forward: ➡️ >  **> Acount age:** `, moment.utc(member.user.createdAt).format("LLLL"))
  .addField(`:arrow_forward: ➡️ >  **> Joined at:** `,  moment.utc(member.joinedAt).format(`LLLL`))
  .addField(`:arrow_forward: ➡️ >  **> In voice channel:** `, member.voice.channel ? member.voice.channel.name + ` (${member.voice.channel.id})` : `None`)
  .addField(`:arrow_forward: ➡️ >  **> Roles:** `,  `**》** ` + member.roles.cache.map(role => role.toString()).join(`, \n**》** `))
  if (!member.bannable) {
  embed.addField(`:arrow_forward: ➡️ > **> Bannable:**`, `:regional_indicator_x: **no**`);} 
  else {embed.addField(`:arrow_forward: ➡️ > ** > Bannable:**`, `:ballot_box_with_check: **yes**`);}
  if (!member.kickable) {
  embed.addField(`:arrow_forward: ➡️ > **> Kickable:**`, `:regional_indicator_x: **no**`);} 
  else {embed.addField(`:arrow_forward: ➡️ > **> Kickable:**`, `:ballot_box_with_check: **yes** `);}
  message.channel.send(embed)
}
}