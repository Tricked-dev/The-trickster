"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function run(e) {
    e.message.channel.send({ embed: {
            color: 3447003,
            description: "A very simple Embed!"
        } });
    e.message.channel.send(`Pong! Current ping is ${e.client.ping}`);
}
exports.run = run;
exports.names = ["ping"];
