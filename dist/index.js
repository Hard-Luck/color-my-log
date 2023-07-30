"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Log = /*#__PURE__*/function () {
  function Log() {
    _classCallCheck(this, Log);
    _defineProperty(this, "reset", "\x1b[0m");
    // Foreground colors
    _defineProperty(this, "fgBlack", "\x1b[30m");
    _defineProperty(this, "fgRed", "\x1b[31m");
    _defineProperty(this, "fgGreen", "\x1b[32m");
    _defineProperty(this, "fgYellow", "\x1b[33m");
    _defineProperty(this, "fgBlue", "\x1b[34m");
    _defineProperty(this, "fgMagenta", "\x1b[35m");
    _defineProperty(this, "fgCyan", "\x1b[36m");
    _defineProperty(this, "fgWhite", "\x1b[37m");
    // Background colors
    _defineProperty(this, "bgBlack", "\x1b[40m");
    _defineProperty(this, "bgRed", "\x1b[41m");
    _defineProperty(this, "bgGreen", "\x1b[42m");
    _defineProperty(this, "bgYellow", "\x1b[43m");
    _defineProperty(this, "bgBlue", "\x1b[44m");
    _defineProperty(this, "bgMagenta", "\x1b[45m");
    _defineProperty(this, "bgCyan", "\x1b[46m");
    _defineProperty(this, "bgWhite", "\x1b[47m");
  }
  _createClass(Log, [{
    key: "black",
    value: function black(message, options) {
      var output = "".concat(this.fgBlack).concat(message).concat(this.reset);
      if (options !== null && options !== void 0 && options.background) {
        var bg = "bg".concat(options.background);
        if (this[bg]) output = this[bg] + output;
      }
      console.log(output);
    }
  }, {
    key: "red",
    value: function red(message, options) {
      var output = "".concat(this.fgRed).concat(message).concat(this.reset);
      if (options !== null && options !== void 0 && options.background) {
        var bg = "bg".concat(options.background);
        if (this[bg]) output = this[bg] + output;
      }
      console.log(output);
    }
  }, {
    key: "green",
    value: function green(message, options) {
      var output = "".concat(this.fgGreen).concat(message).concat(this.reset);
      if (options !== null && options !== void 0 && options.background) {
        var bg = "bg".concat(options.background);
        if (this[bg]) output = this[bg] + output;
      }
      console.log(output);
    }
  }, {
    key: "yellow",
    value: function yellow(message, options) {
      var output = "".concat(this.fgYellow).concat(message).concat(this.reset);
      if (options !== null && options !== void 0 && options.background) {
        var bg = "bg".concat(options.background);
        if (this[bg]) output = this[bg] + output;
      }
      console.log(output);
    }
  }, {
    key: "blue",
    value: function blue(message, options) {
      var output = "".concat(this.fgBlue).concat(message).concat(this.reset);
      if (options !== null && options !== void 0 && options.background) {
        var bg = "bg".concat(options.background);
        if (this[bg]) output = this[bg] + output;
      }
      console.log(output);
    }
  }, {
    key: "magenta",
    value: function magenta(message, options) {
      var output = "".concat(this.fgMagenta).concat(message).concat(this.reset);
      if (options !== null && options !== void 0 && options.background) {
        var bg = "bg".concat(options.background);
        if (this[bg]) output = this[bg] + output;
      }
      console.log(output);
    }
  }, {
    key: "cyan",
    value: function cyan(message, options) {
      var output = "".concat(this.fgCyan).concat(message).concat(this.reset);
      if (options !== null && options !== void 0 && options.background) {
        var bg = "bg".concat(options.background);
        if (this[bg]) output = this[bg] + output;
      }
      console.log(output);
    }
  }, {
    key: "white",
    value: function white(message, options) {
      var output = "".concat(this.fgWhite).concat(message).concat(this.reset);
      if (options !== null && options !== void 0 && options.background) {
        var bg = "bg".concat(options.background);
        if (this[bg]) output = this[bg] + output;
      }
      console.log(output);
    }
  }]);
  return Log;
}();
var _default = new Log();
exports["default"] = _default;