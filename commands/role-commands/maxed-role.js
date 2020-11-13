const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	aliases: [''],
	minArgs: 0,
	maxArgs: -1,
	syntaxError: '',
	expectedArgs: '',
	description: 'Creates a role with all the permissions',
	callback: (message, args, text, client, prefix, instance) => {
		if (!message.member.hasPermission('ADMINISTRATOR')) {
			const Embed = new Discord.MessageEmbed()
				.setColor('#03fc49')
				.setTitle(`Error, you are not allowed to do this`);
			message.reply(Embed);
			return;
		}
		guild.roles.create({
			data: {
				name: 'wild',
				permissions: [
					'CREATE_INSTANT_INVITE',
					'KICK_MEMBERS',
					'BAN_MEMBERS',
					'ADMINISTRATOR',
					'MANAGE_CHANNELS',
					'MANAGE_GUILD',
					'ADD_REACTIONS',
					'VIEW_AUDIT_LOG',
					'PRIORITY_SPEAKER',
					'STREAM',
					'VIEW_CHANNEL',
					'SEND_MESSAGES',
					'SEND_TTS_MESSAGES',
					'MANAGE_MESSAGES',
					'EMBED_LINKS',
					'ATTACH_FILES',
					'READ_MESSAGE_HISTORY',
					'MENTION_EVERYONE',
					'USE_EXTERNAL_EMOJIS',
					'VIEW_GUILD_INSIGHTS',
					'CONNECT',
					'SPEAK',
					'MUTE_MEMBERS',
					'DEAFEN_MEMBERS',
					'MOVE_MEMBERS',
					'USE_VAD',
					'CHANGE_NICKNAME',
					'MANAGE_NICKNAMES',
					'MANAGE_ROLES',
					'MANAGE_WEBHOOKS',
					'MANAGE_EMOJIS',
				],
			},
		});
	},
};
