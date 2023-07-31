interface LogOptions {
  background?:
  | "Black"
  | "Red"
  | "Green"
  | "Yellow"
  | "Blue"
  | "Magenta"
  | "Cyan"
  | "White";
}
type LogFunctionName =
  | "black"
  | "green"
  | "red"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white";

type LogFunction = (message: string, options?: LogOptions) => void;
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

export const log: Record<LogFunctionName, LogFunction> = {
  black: function (message: string, options?: LogOptions) {
    let output = `${fgBlack}${message}${reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (log[bg as LogFunctionName])
        output = log[bg as LogFunctionName] + output;
    }
    console.log(output);
  },

  red: function (message: string, options?: LogOptions) {
    let output = `${fgRed}${message}${reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (log[bg as LogFunctionName])
        output = log[bg as LogFunctionName] + output;
    }
    console.log(output);
  },
  green: function (message: string, options?: LogOptions) {
    let output = `${fgGreen}${message}${reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (log[bg as LogFunctionName])
        output = log[bg as LogFunctionName] + output;
    }
    console.log(output);
  },
  yellow: function (message: string, options?: LogOptions) {
    let output = `${fgYellow}${message}${reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (log[bg as LogFunctionName])
        output = log[bg as LogFunctionName] + output;
    }
    console.log(output);
  },
  blue: function (message: string, options?: LogOptions) {
    let output = `${fgBlue}${message}${reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (log[bg as LogFunctionName])
        output = log[bg as LogFunctionName] + output;
    }
    console.log(output);
  },
  magenta: function (message: string, options?: LogOptions) {
    let output = `${fgMagenta}${message}${reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (log[bg as LogFunctionName])
        output = log[bg as LogFunctionName] + output;
    }
    console.log(output);
  },
  cyan: function (message: string, options?: LogOptions) {
    let output = `${fgCyan}${message}${reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (log[bg as LogFunctionName])
        output = log[bg as LogFunctionName] + output;
    }
    console.log(output);
  },
  white: function (message: string, options?: LogOptions) {
    let output = `${fgWhite}${message}${reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (log[bg as LogFunctionName])
        output = log[bg as LogFunctionName] + output;
    }
    console.log(output);
  },
};


