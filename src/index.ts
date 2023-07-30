/**
 * Interface for log options. Allows specifying the background color for the log message.
 */
interface LogOptions {
  background?: 'Black' | 'Red' | 'Green' | 'Yellow' | 'Blue' | 'Magenta' | 'Cyan' | 'White';
}

/**
 * Class for logging messages with custom foreground and background colors.
 */
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

  /**
   * Logs a message with black foreground color.
   *
   * @param {string} message - The message to log.
   * @param {LogOptions} [options] - Optional settings for the log.
   */
  black(message: string, options?: LogOptions) {
    let output = `${this.fgBlack}${message}${this.reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (this[bg as keyof Log]) output = this[bg as keyof Log] + output;
    }
    console.log(output);
  }

  /**
   * Logs a message with red foreground color.
   *
   * @param {string} message - The message to log.
   * @param {LogOptions} [options] - Optional settings for the log.
   */
  red(message: string, options?: LogOptions) {
    let output = `${this.fgRed}${message}${this.reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (this[bg as keyof Log]) output = this[bg as keyof Log] + output;
    }
    console.log(output);
  }

  /**
   * Logs a message with green foreground color.
   *
   * @param {string} message - The message to log.
   * @param {LogOptions} [options] - Optional settings for the log.
   */
  green(message: string, options?: LogOptions) {
    let output = `${this.fgGreen}${message}${this.reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (this[bg as keyof Log]) output = this[bg as keyof Log] + output;
    }
    console.log(output);
  }

  /**
   * Logs a message with yellow foreground color.
   *
   * @param {string} message - The message to log.
   * @param {LogOptions} [options] - Optional settings for the log.
   */
  yellow(message: string, options?: LogOptions) {
    let output = `${this.fgYellow}${message}${this.reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (this[bg as keyof Log]) output = this[bg as keyof Log] + output;
    }
    console.log(output);
  }

  /**
   * Logs a message with blue foreground color.
   *
   * @param {string} message - The message to log.
   * @param {LogOptions} [options] - Optional settings for the log.
   */
  blue(message: string, options?: LogOptions) {
    let output = `${this.fgBlue}${message}${this.reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (this[bg as keyof Log]) output = this[bg as keyof Log] + output;
    }
    console.log(output);
  }

  /**
   * Logs a message with magenta foreground color.
   *
   * @param {string} message - The message to log.
   * @param {LogOptions} [options] - Optional settings for the log.
   */
  magenta(message: string, options?: LogOptions) {
    let output = `${this.fgMagenta}${message}${this.reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (this[bg as keyof Log]) output = this[bg as keyof Log] + output;
    }
    console.log(output);
  }

  /**
   * Logs a message with cyan foreground color.
   *
   * @param {string} message - The message to log.
   * @param {LogOptions} [options] - Optional settings for the log.
   */
  cyan(message: string, options?: LogOptions) {
    let output = `${this.fgCyan}${message}${this.reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (this[bg as keyof Log]) output = this[bg as keyof Log] + output;
    }
    console.log(output);
  }

  /**
   * Logs a message with white foreground color.
   *
   * @param {string} message - The message to log.
   * @param {LogOptions} [options] - Optional settings for the log.
   */
  white(message: string, options?: LogOptions) {
    let output = `${this.fgWhite}${message}${this.reset}`;
    if (options?.background) {
      const bg = `bg${options.background}`;
      if (this[bg as keyof Log]) output = this[bg as keyof Log] + output;
    }
    console.log(output);
  }
}

/**
 * Default instance of Log class.
 */
export default new Log();
