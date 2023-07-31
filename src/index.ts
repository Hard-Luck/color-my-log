interface LogOptions {
  background?: Color
}
type Color =
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

function getBackground(color: Color) {
  const backgrounds = {
    black: "\x1b[40m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    white: "\x1b[47m"
  }
  return backgrounds[color] || null;
}

export const log: Record<Color, LogFunction> = {
  black: function (message: string, options?: LogOptions) {
    let output = `${fgBlack}${message}${reset}`;
    const background = options?.background
    const bg = getBackground(background as Color);
    if (bg) output = bg + output;
    console.log(output);
  },

  red: function (message: string, options?: LogOptions) {
    let output = `${fgRed}${message}${reset}`;
    const background = options?.background
    const bg = getBackground(background as Color);
    if (bg) output = bg + output;
    console.log(output);
  },
  green: function (message: string, options?: LogOptions) {
    let output = `${fgGreen}${message}${reset}`;
    const background = options?.background
    const bg = getBackground(background as Color);
    if (bg) output = bg + output;
    console.log(output);
  },
  yellow: function (message: string, options?: LogOptions) {
    let output = `${fgYellow}${message}${reset}`;
    const background = options?.background
    const bg = getBackground(background as Color);
    if (bg) output = bg + output;
    console.log(output);
  },
  blue: function (message: string, options?: LogOptions) {
    let output = `${fgBlue}${message}${reset}`;
    const background = options?.background
    const bg = getBackground(background as Color);
    if (bg) output = bg + output;
    console.log(output);
  },
  magenta: function (message: string, options?: LogOptions) {
    let output = `${fgMagenta}${message}${reset}`;
    const background = options?.background
    const bg = getBackground(background as Color);
    if (bg) output = bg + output;
    console.log(output);
  },
  cyan: function (message: string, options?: LogOptions) {
    let output = `${fgCyan}${message}${reset}`;
    const background = options?.background
    const bg = getBackground(background as Color);
    if (bg) output = bg + output;
    console.log(output);
  },
  white: function (message: string, options?: LogOptions) {
    let output = `${fgWhite}${message}${reset}`;
    const background = options?.background
    const bg = getBackground(background as Color);
    if (bg) output = bg + output;
    console.log(output);
  },
};


