# color-my-log (WIP)

**LOWERCASE BACKGROUND COLOURS && TYPES ADDED**
**NOTE: This package is currently a work in progress (WIP). It provides a simple way to print colored log messages with background colors in Node.js applications. Additional features and options may be added in future releases.**

`color-my-log` is a lightweight npm package that enables you to print colored log messages in Node.js applications. It currently supports customizing the background color of log messages.

## Installation

You can install `color-my-log` using npm:

```bash
npm install color-my-log
```

## Usage

To use `color-my-log` in your Node.js application, first, require the package and create an instance of the `Log` class:

### JS

```javascript
const { log } = require("color-my-log");
```

### ES6

```typescript
import { log } from "color-my-log";
```

_Coming soon_

### Printing Colored Log Messages

The `color-my-log` package provides methods to print log messages with different foreground colors and customizable background colors. You can use the following methods to print log messages with different foreground colors and a specified background color:

```javascript
log.red(message, options);
log.black(message, options);
log.green(message, options);
log.yellow(message, options);
log.blue(message, options);
log.magenta(message, options);
log.cyan(message, options);
log.white(message, options);
```

![image](https://github.com/Hard-Luck/color-my-log/assets/72257311/66bd1a7a-10b6-4b06-b485-be5eb02e0619)

**Parameters:**

- `message` (string): The log message that you want to print.
- `options` (optional object): An optional object to customize the log appearance.
  - `background` (string): Specify the background color for the log message. Valid values are `'black'`, `'red'`, `'green'`, `'yellow'`, `'blue'`, `'magenta'`, `'cyan'`, and `'white'`.

**Example:**

```javascript
log.red("Error occurred!", { background: "yellow" });
log.blue("Info message", { background: "green" });
```

### Available Colors

The following are the available foreground colors that you can use with the `color-my-log` package:

- `red`
- `black`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`

### Customization

The package is currently under development, and more features and customization options may be added in future releases. The package uses ANSI escape codes for color formatting, and you can easily extend it with your own color choices.

If you have any suggestions or feature requests, feel free to submit them to [GitHub repository link].

## License

This package is open-source and distributed under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.

## Author

`color-my-log` was created by Mark Tyree. You can reach me at [tyreemarka@gmail.com](mailto:tyreemarka@gmail.com).
