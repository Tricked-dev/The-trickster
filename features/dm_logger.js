
module.exports = (client) => {

  client.on('message', async (message) => {
  if(message.guild === null){
    console.log('╠═( Dm received )═════════════════════════════════════════════════════════════════════════════════╣')
    let	content = '';
		let spaces = 98 - (`║ server: DM`).length
		content += `║ Server: DM`
		for (i = 0; i < spaces; i++) { 
		  content += ' '
		}
		content += '║\n'
		let paces = 99 - (`║ Player: ${message.author.tag} `).length
		content += `║ Player: ${message.author.tag}`
		for (i = 0; i < paces; i++) { 
		  content += ' '
		}
		content += '║\n'
		let aces = 98 - (`║ Text: ${message.content}`).length
		content += `║ Text: ${message.content}`
		for (i = 0; i < aces; i++) { 
		  content += ' '
		}
		content += '║'
		console.log(content)
    }  
  })
  }
