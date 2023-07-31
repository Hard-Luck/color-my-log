interface LogOptions {
    background?: Color;
}
type Color = "black" | "green" | "red" | "yellow" | "blue" | "magenta" | "cyan" | "white";
type LogFunction = (message: string, options?: LogOptions) => void;
export declare const log: Record<Color, LogFunction>;
export {};
