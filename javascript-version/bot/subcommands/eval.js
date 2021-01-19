exports.eval = async function (message, input, client) {
try {
            input = input.replace("@", "@​")
        let output = await eval(input);
         
        let Done = {
            title : `Eval`,
            color : `BLACK`,
            fields : [{
                name  : "🍞Input",
                value : [
                    "```js",
                    input,
                    "```"
                ].join("\n")
            },
            {
                name  : "🫓Output",
                value : [
                    "```js",
                    output,
                    "```"
                ].join("\n")
            }
            ]
            }
            try{
            return message.channel.send({embed: Done}); 
            } catch (error) {error;}
		} catch (err) {
            let Done = {
            title : `Eval`,
            color : `BLACK`,
            fields : [{
                name  : "🍞Input",
                value : [
                    "```js",
                    input,
                    "```"
                ].join("\n")
            },
            {
                name  : "🫓Output",
                value : [
                    "```js",
                    err,
                    "```"
                ].join("\n")
            }
            ]
            }
            try{
            return message.channel.send({embed: Done}); 
            } catch (error) {error;}
        }
    }