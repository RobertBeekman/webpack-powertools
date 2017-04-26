/// <reference types="webpack" />
import * as Webpack from "webpack";
export interface Options {
}
export declare class AlwaysIncludeHmrBootstrapPlugin {
    private options;
    constructor(options?: Options);
    apply(compiler: Webpack.Compiler): void;
}
