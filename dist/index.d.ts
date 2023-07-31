interface LogOptions {
    background?: "Black" | "Red" | "Green" | "Yellow" | "Blue" | "Magenta" | "Cyan" | "White";
}
type LogFunctionName = "black" | "green" | "red" | "yellow" | "blue" | "magenta" | "cyan" | "white";
type LogFunction = (message: string, options?: LogOptions) => void;
export declare const log: Record<LogFunctionName, LogFunction>;
export {};
