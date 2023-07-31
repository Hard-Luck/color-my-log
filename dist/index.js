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
const bgBlack = "\x1b[40m";
const bgRed = "\x1b[41m";
const bgGreen = "\x1b[42m";
const bgYellow = "\x1b[43m";
const bgBlue = "\x1b[44m";
const bgMagenta = "\x1b[45m";
const bgCyan = "\x1b[46m";
const bgWhite = "\x1b[47m";
exports.log = {
    black: function (message, options) {
        let output = `${fgBlack}${message}${reset}`;
        if (options?.background) {
            const bg = `bg${options.background}`;
            if (exports.log[bg])
                output = exports.log[bg] + output;
        }
        console.log(output);
    },
    red: function (message, options) {
        let output = `${fgRed}${message}${reset}`;
        if (options?.background) {
            const bg = `bg${options.background}`;
            if (exports.log[bg])
                output = exports.log[bg] + output;
        }
        console.log(output);
    },
    green: function (message, options) {
        let output = `${fgGreen}${message}${reset}`;
        if (options?.background) {
            const bg = `bg${options.background}`;
            if (exports.log[bg])
                output = exports.log[bg] + output;
        }
        console.log(output);
    },
    yellow: function (message, options) {
        let output = `${fgYellow}${message}${reset}`;
        if (options?.background) {
            const bg = `bg${options.background}`;
            if (exports.log[bg])
                output = exports.log[bg] + output;
        }
        console.log(output);
    },
    blue: function (message, options) {
        let output = `${fgBlue}${message}${reset}`;
        if (options?.background) {
            const bg = `bg${options.background}`;
            if (exports.log[bg])
                output = exports.log[bg] + output;
        }
        console.log(output);
    },
    magenta: function (message, options) {
        let output = `${fgMagenta}${message}${reset}`;
        if (options?.background) {
            const bg = `bg${options.background}`;
            if (exports.log[bg])
                output = exports.log[bg] + output;
        }
        console.log(output);
    },
    cyan: function (message, options) {
        let output = `${fgCyan}${message}${reset}`;
        if (options?.background) {
            const bg = `bg${options.background}`;
            if (exports.log[bg])
                output = exports.log[bg] + output;
        }
        console.log(output);
    },
    white: function (message, options) {
        let output = `${fgWhite}${message}${reset}`;
        if (options?.background) {
            const bg = `bg${options.background}`;
            if (exports.log[bg])
                output = exports.log[bg] + output;
        }
        console.log(output);
    },
};
