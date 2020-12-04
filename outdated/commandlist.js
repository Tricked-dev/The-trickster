	const Enmap = require("enmap") 
const db = require('quick.db')
module.exports = async (client, command) => {
	client.on(['command', 'message'], async (message, command) => {
	console.log(command + 'newsls')	
	})
}

