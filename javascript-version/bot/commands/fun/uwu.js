    module.exports = {
   category: 'Fun',
      aliases: ['owofhy'],
  minArgs: 1,
  maxArgs: -1,

  expectedArgs: "idk?", 
  description: 'idk?', 
   callback: ({message, args, client, prefix, instance}) => {
    const faces = [`(・'ω'・)`, ';;w;;', 'owo', 'UwU', '>w<', '^w^', '0w0', '*w*']
    function Owoify(str) {
      return str
        .replace(/(?:r|l|h)/g, 'w')
        .replace(/(?:R|L|H)/g, 'W')
        .replace(/n([aeiou])/g, 'ny$1')
        .replace(/N([aeiou])/g, 'Ny$1')
        .replace(/N([AEIOU])/g, 'Ny$1')
        .replace(/ove/g, 'uv')
        .replace(/!+/g, ' ' + faces[Math.floor(Math.random() * faces.length)] + ' ')
    }


    // Get question to answer
    const text = message.content.split(' ').slice(1).join(' ')
    if (!text) { return message.reply(`**You need to specify a message..**`) }

    // Send message
    message.channel.send(`${Owoify(text)}`)
}
    }