module.exports = (client) => {
client.on('message', message => { // <------------- command handler
  if(message.content.includes('doggo')) {
    console.log(`Trickedbot > doggo was used`)
message.channel.send('https://cdn.discordapp.com/emojis/756988872906375298.gif?v=1')
}}
)}
