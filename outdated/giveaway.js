		  let mins = Math.ceil(1);
    let maxs = Math.floor(200); 
    const index = Math.floor(
				Math.floor(Math.random() * (maxs - mins) + mins)
            );
			if(index == '25'){
	const Embed = new Discord.MessageEmbed()
        .setColor('#03fc49')
        .setTitle('Points!')
        .setTitle(`Giveaway in this server (40K Points!)`)
			.setURL(
				`https://discord.gg/tEPyZcSQrh`
			)
        .setColor('PURPLE')
	  message.reply(Embed);
}