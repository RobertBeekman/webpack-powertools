/// <reference types="webpack" />
import * as Webpack from "webpack";
/**
 * This plugin ensures that the required bootstrapping for Webpack HMR is inserted into the entry-point for the application.
 * By doing this, any subsequent compilations that use the resulting bundle can use HMR.
 */
export declare class AlwaysIncludeHmrBootstrapPlugin {
    private entryName;
    constructor(entryName: string);
    apply(compiler: Webpack.Compiler): void;
}
