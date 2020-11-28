module.exports = async (client) => {
client.on('message', message => { // <------------- command handler

    if(message.author.bot) return;
if(message.channel.id == 75473067932922641){
setTimeout(function(){
    //do what you need here
}, 2000);
if(!message) return;
let num = message.content // the number
let amount =  parseInt(num)
let end = (amount+1)
message.channel.send(end)
}
}
)}