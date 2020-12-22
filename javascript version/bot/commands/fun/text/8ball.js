
const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
   category: 'Fun',
  aliases: ['ask', 'question', 'trickedbot'],
  minArgs: 1,
  maxArgs: -1,
  permissions: 'MANAGE_NICKNAMES',
  syntaxError: "!8ball <qustion> /s",
  expectedArgs: "<question>", 
  description: 'Ask maybe he will know',


  callback: (message, args, text, client, prefix, instance) => {
    
if (!args[0]) return message.reply({embed: {
        color: `#FF0000`,
        description: `Please ask a question!`,
        icon_url: message.author.displayAvatarURL()
        }
    });
    let question = args.slice(0).join(" ");
    if (question == "that was a joke right?") {
    let ballembd = new Discord.MessageEmbed()
    .setAuthor(message.author.tag)
    .setColor(`RANDOM`)
    .addField("Question", question)
    .addField("Answer", "Yes.")
    .setFooter(`8ball`);
    message.channel.send(ballembd)
    return;}
    if (question == "are you rigged?") {
    let ballembd = new Discord.MessageEmbed()
    .setAuthor(message.author.tag)
    .setColor(`RANDOM`)
    .addField("Question", question)
    .addField("Answer", "No.")
    .setFooter(`8ball`);
    message.channel.send(ballembd)
    return;}
    if (question == "sex penis") {
    let ballembd = new Discord.MessageEmbed()
    .setAuthor(message.author.tag)
    .setColor(`RANDOM`)
    .addField("Question", question)
    .addField("Answer", "Cholera kurwa. Tak cholernie chcę zerżnąć psa z animal crossing. Nie mogę już tego znieść. Za każdym razem, gdy idę do ratusza, dostaję potężną erekcję. Widziałem dosłownie każdy artykuł porno z animal crossing online. Moje sny to tylko ciągły seks z Isabelle. Mam dość tego, że budzę się każdego ranka z sześcioma orzechami w moich bokserkach i wiem, że to są orzechy, które powinny zostać wbite w ciasną psią cipkę Isabelle. Chcę, żeby miała moje zmutowane ludzkie / psie dzieci. Kurwa, moja pieprzona mama złapała mnie z psem sąsiadów. Ubrałem ją w spódnicę mojej siostry i pojechałem do pieprzonego miasta. Nie odezwała się do mnie od 10 godzin i martwię się, że odbierze mi 3DS. Może już nigdy nie zobaczę Isabelle.")
    .setFooter(`8ball`);
    message.channel.send(ballembd)
    return;}
    if (question == "no") {
    let ballembd = new Discord.MessageEmbed()
    .setAuthor(message.author.tag)
    .setColor(`RANDOM`)
    .addField("Question", question)
    .addField("Answer", "Yes.")
    .setFooter(`8ball`);
    message.channel.send(ballembd)
    return;}
    if (question == "yes") {
    let ballembd = new Discord.MessageEmbed()
    .setAuthor(message.author.tag)
    .setColor(`RANDOM`)
    .addField("Question", question)
    .addField("Answer", "No.")
    .setFooter(`8ball`);
    message.channel.send(ballembd)
    return;}
    let replies = ["Yes.", "No.", "Ask tricked he knows everything.", "Maybe.", "Yes and definitely.", "It is certain.", "As I see it, yes.", "Very doubtful.", "Eh I will say yes to that.","Hey, i dont make the decisions", "NO!", "Never.", "Nope.", "Scientifically yes."];
    
    let result = Math.floor((Math.random() * replies.length));
    
    let ballembed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag)
    .setColor(`RANDOM`)
    .addField("Question", question)
    .addField("Answer", replies[result])
    .setFooter(`8ball`);

message.channel.send(ballembed)


  }
}