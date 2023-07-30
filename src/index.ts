interface LogOptions {
  background?: 'Black' | 'Red' | 'Green' | 'Yellow' | 'Blue' | 'Magenta' | 'Cyan' | 'White';
}

class Log {
  private readonly reset = "\x1b[0m";

  // Foreground colors
  private readonly fgBlack = "\x1b[30m";
  private readonly fgRed = "\x1b[31m";
  private readonly fgGreen = "\x1b[32m";
  private readonly fgYellow = "\x1b[33m";
  private readonly fgBlue = "\x1b[34m";
  private readonly fgMagenta = "\x1b[35m";
  private readonly fgCyan = "\x1b[36m";
  private readonly fgWhite = "\x1b[37m";

  // Background colors
  private readonly bgBlack = "\x1b[40m";
  private readonly bgRed = "\x1b[41m";
  private readonly bgGreen = "\x1b[42m";
  private readonly bgYellow = "\x1b[43m";
  private readonly bgBlue = "\x1b[44m";
  private readonly bgMagenta = "\x1b[45m";
  private readonly bgCyan = "\x1b[46m";
  private readonly bgWhite = "\x1b[47m";

  black(message: string, options?: LogOptions) {
    let output = `${this.fgBlack}${message}${this.reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (this[bg as keyof Log]) output = this[bg as keyof Log] + output;
    }
    console.log(output);
  }

  red(message: string, options?: LogOptions) {
    let output = `${this.fgRed}${message}${this.reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (this[bg as keyof Log]) output = this[bg as keyof Log] + output;
    }
    console.log(output);
  }

  green(message: string, options?: LogOptions) {
    let output = `${this.fgGreen}${message}${this.reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (this[bg as keyof Log]) output = this[bg as keyof Log] + output;
    }
    console.log(output);
  }

  yellow(message: string, options?: LogOptions) {
    let output = `${this.fgYellow}${message}${this.reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (this[bg as keyof Log]) output = this[bg as keyof Log] + output;
    }
    console.log(output);
  }

  blue(message: string, options?: LogOptions) {
    let output = `${this.fgBlue}${message}${this.reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (this[bg as keyof Log]) output = this[bg as keyof Log] + output;
    }
    console.log(output);
  }

  magenta(message: string, options?: LogOptions) {
    let output = `${this.fgMagenta}${message}${this.reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (this[bg as keyof Log]) output = this[bg as keyof Log] + output;
    }
    console.log(output);
  }

  cyan(message: string, options?: LogOptions) {
    let output = `${this.fgCyan}${message}${this.reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (this[bg as keyof Log]) output = this[bg as keyof Log] + output;
    }
    console.log(output);
  }

  white(message: string, options?: LogOptions) {
    let output = `${this.fgWhite}${message}${this.reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (this[bg as keyof Log]) output = this[bg as keyof Log] + output;
    }
    console.log(output);
  }
}

export default new Log();
