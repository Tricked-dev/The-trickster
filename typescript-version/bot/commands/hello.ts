import {runEvent} from "../index";

export function run(e:runEvent) {
            e.message.channel.send({ embed: {
            color: 3447003,
            title: 'The trickster',
            description: "Hello!"
        } });
}

export const names = ["hello"];