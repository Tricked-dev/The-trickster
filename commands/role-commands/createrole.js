const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	aliases: ['role'],
	minArgs: 0,
	maxArgs: -1,
	syntaxError:
		'please use <name> <color (caps)> <pos(from bottom)> <mentionable(true/false)>',
	expectedArgs:
		'please use <name> <color (caps)> <pos(from bottom)> <mentionable(true/false)>',
	description: 'Creates a role',
	callback: (message, args, text, client, prefix, instance) => {
		const member = message.member;
		let role = args[0];
		let color = args[1];
		let guild = message.guild;
		let pos = args[2];
		let mention = args[3];
		if (!color) color = 'RANDOM';
		if (!pos) pos = '1';
		if (!mention) mention = 'true';
		if (!role)
			return message.reply('please add a name of the role you want to create');
		async function wait() {
			await guild.roles
				.create({
					data: {
						name: `${role}`,
						color: `${color}`,
						position: `${pos}`,
						mentionable: `${mention}`,
					},
				})
				.then(console.log)
				.catch((error) =>
					message.channel
						.send(`Sorry ${message.author} I couldn't create role because of : ${error}\ 
Role will say succesfully made but its not.`)
				);
			member.roles.add(`${role}`);
			const Embed = new Discord.MessageEmbed()
				.setColor('#03fc49')
				.setTitle(`Role ${role} created and added`);
			message.reply(Embed);
			let rolePP = message.guild.roles.cache.find(
				(role) => role.name === `${args[0]}`
			);
			message.member.roles.add(rolePP);
		}
		wait();
	},
};
