/**
 * loadSound.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 6 Nov 2014
 */

import context from "./context";

function loadSound(url, callback) {
    if (!context) {
        callback(null);
        return;
    }

    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";

    request.onload = () => {

        context.decodeAudioData(
            request.response,
            buffer => {
                if (!buffer) {
                    console.error("error decoding file data: " + url);
                    callback(null);
                    return;
                }
                callback(buffer);
            },
            () => {
                console.error("error decoding file data: " + url);
                callback(null);
            }
        );
    };

    request.onerror = function () {
        console.error("error loading " + url);
        callback(null);
    };

    request.send();
}

export default loadSound;
