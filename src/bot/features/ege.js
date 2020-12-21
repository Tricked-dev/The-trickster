module.exports = (client) => {
client.on('message', message => { // <------------- command handler
    if(message.guild === null) return
    if(!message.guild.id == 701833606280118282) {
        return
    }
    setTimeout(function(){
    if(message.content.includes('ege') || message.content.includes('Ege') || message.content.includes('EGE') || message.content.includes('e g e') || message.content.includes('E G E') || message.content.includes('EGG') || message.content.includes('Egg')||message.content.includes('eGg')||message.content.includes('egg')) {
    console.log('╠═( Ege was used )════════════════════════════════════════════════════════════════════════════════╣')
message.react('786270668697501730')
message.react('786270668668796978')
message.react('786270668023005205')
message.react('786270667883937852')
message.react('786270667070636034')
message.react('786270666726047816')
}
    }, 500);
if(message.content.includes('smajki') || message.content.includes('Smajki') || message.content.includes('SMAJKI')) {
       console.log('╠═( Smajki was used )═════════════════════════════════════════════════════════════════════════════╣')
message.react('786270601857728583')
message.react('786270602151067698')
message.react('786270602532749352')
message.react('786270602423173131')
message.react('786270602860167218')
message.react('786270603061493770')
    }
}
)}
module.exports.config = {
  displayName: 'ege', // Can be changed any time
  dbName: 'ege', // Should be unique and NEVER be changed once set
  loadDBFirst: true,
}
