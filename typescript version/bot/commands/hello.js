"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function run(e) {
    e.message.channel.send({ embed: {
            color: 3447003,
            title: 'The trickster',
            description: "Hello!"
        } });
    e.message.reply(`Hello`);
}
exports.run = run;
exports.names = ["hello"];
