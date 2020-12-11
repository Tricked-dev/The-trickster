
module.exports = (client) => {
  async function getmember(Client,id){
        let member = await Client.users.fetch(id);
        return member
  }
  client.on('message', (message) => {
  if(message.guild === null){
    getmember(client,message.author.id).then(member =>{
    console.log('Trickedbot > Author: ' + member.username + ' Message: ' + message.content)
    })
  }; 
})}