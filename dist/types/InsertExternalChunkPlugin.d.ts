/// <reference types="webpack" />
import * as Webpack from "webpack";
/**
 * This plugin extends the HtmlWebpackPlugin by inserting an external chunk so that it loads after the
 * commons chunk, but before any chunks that are part of the compilation.
 */
export declare class InsertExternalChunkPlugin {
    private chunkPath;
    constructor(chunkPath: string);
    apply(compiler: Webpack.Compiler): void;
}
