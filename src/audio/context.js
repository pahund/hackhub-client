/**
 * context.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 3 Dec 2014
 */

const Context = window.AudioContext ||
    window.webkitAudioContext ||
    window.mozAudioContext ||
    window.oAudioContext ||
    window.msAudioContext;

let context = null;

if (Context) {
    context = new Context();
} else {
    console.error("No audio context – no achievement sounds");
}

export default context;
