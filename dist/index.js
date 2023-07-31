"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const reset = "\x1b[0m";
const fgBlack = "\x1b[30m";
const fgRed = "\x1b[31m";
const fgGreen = "\x1b[32m";
const fgYellow = "\x1b[33m";
const fgBlue = "\x1b[34m";
const fgMagenta = "\x1b[35m";
const fgCyan = "\x1b[36m";
const fgWhite = "\x1b[37m";
function getBackground(color) {
    const backgrounds = {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m"
    };
    return backgrounds[color] || null;
}
exports.log = {
    black: function (message, options) {
        let output = `${fgBlack}${message}${reset}`;
        const background = options?.background;
        const bg = getBackground(background);
        if (bg)
            output = bg + output;
        console.log(output);
    },
    red: function (message, options) {
        let output = `${fgRed}${message}${reset}`;
        const background = options?.background;
        const bg = getBackground(background);
        if (bg)
            output = bg + output;
        console.log(output);
    },
    green: function (message, options) {
        let output = `${fgGreen}${message}${reset}`;
        const background = options?.background;
        const bg = getBackground(background);
        if (bg)
            output = bg + output;
        console.log(output);
    },
    yellow: function (message, options) {
        let output = `${fgYellow}${message}${reset}`;
        const background = options?.background;
        const bg = getBackground(background);
        if (bg)
            output = bg + output;
        console.log(output);
    },
    blue: function (message, options) {
        let output = `${fgBlue}${message}${reset}`;
        const background = options?.background;
        const bg = getBackground(background);
        if (bg)
            output = bg + output;
        console.log(output);
    },
    magenta: function (message, options) {
        let output = `${fgMagenta}${message}${reset}`;
        const background = options?.background;
        const bg = getBackground(background);
        if (bg)
            output = bg + output;
        console.log(output);
    },
    cyan: function (message, options) {
        let output = `${fgCyan}${message}${reset}`;
        const background = options?.background;
        const bg = getBackground(background);
        if (bg)
            output = bg + output;
        console.log(output);
    },
    white: function (message, options) {
        let output = `${fgWhite}${message}${reset}`;
        const background = options?.background;
        const bg = getBackground(background);
        if (bg)
            output = bg + output;
        console.log(output);
    },
};
