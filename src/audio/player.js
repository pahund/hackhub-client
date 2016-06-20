/**
 * player.js
 *
 * Loads and plays sounds.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 6 Nov 2014
 */

import context from "./context";
import loadSound from "./loadSound";

let buffers = {};

function getSoundsFromInput(input) {
    let sounds = [];
    if (input[0].constructor === Array) {
        if (input.length > 1) {
            throw new Error("error loading sound: " +
                    "if first argument is an array, it is expected to be the only argument");
        }
        sounds = input[0];
    } else {
        if (input.length !== 2) {
            throw new Error("error loading sound: " +
                    "either pass an array of id/path values, or one ID and one path");
        }
        sounds.push({
            id: input[0],
            path: input[1]
        });
    }
    return sounds;
}

function load() {
    getSoundsFromInput(arguments).forEach(sound => loadSound(sound.path, data => buffers[sound.id] = data));
}

function play(id) {
    const buffer = buffers[id];
    if (buffer === undefined) {
        throw new Error(`Unknown sound: ${id}`);
    }
    if (buffer === null) {
        return; // browser doesn't support audio or loading ogg file failed
    }
    let source = context.createBufferSource(),
        gain = context.createGain();

    source.connect(gain);
    gain.connect(context.destination);
    source.buffer = buffer;
    source.start(0);
}

export default {
    /**
     * Loads sounds and stores them in the player's buffer.
     *
     * Variable arguments, variant 1:
     *
     * @param id The sound's ID used to reference when invoking the play method
     * @param path The path of the sound file, relative to the project root
     *
     * Variant 2:
     *
     * @param sounds Array of objects, each containing an id and path property
     */
    load,

    /**
     * Plays a sound.
     *
     * @param id The ID of the sound to play
     */
    play
};
