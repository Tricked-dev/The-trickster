module.exports = (client) => {
client.on('message', message => { // <------------- command handler
  if(message.content.includes('smajki')) {
    console.log('Trickedbot > Smajki was used')
message.react('776154562000060427')
message.react('776154561966506024')
message.react('776154562218295316')
message.react('776154559981682718')
message.react('776154560149979176')
message.react('776154559663308851')
}}
)}
