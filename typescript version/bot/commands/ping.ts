import { MessageEmbed } from "discord.js";
import {runEvent} from "../index";

export function run(e:runEvent) {
    e.message.channel.send({embed: {
  color: 3447003,
  description: "A very simple Embed!"
    }});
}

export const names = ["ping"];