"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This plugin extends the HtmlWebpackPlugin by inserting an external chunk so that it loads after the
 * commons chunk, but before any chunks that are part of the compilation.
 */
class InsertExternalChunkPlugin {
    constructor(chunkPath) {
        this.chunkPath = chunkPath;
    }
    apply(compiler) {
        compiler.plugin("compilation", (compilation) => {
            compilation.plugin("html-webpack-plugin-alter-chunks", (chunks) => {
                chunks.splice(1, 0, {
                    names: ['external-chunk'],
                    files: [this.chunkPath]
                });
                return chunks;
            });
        });
    }
}
exports.InsertExternalChunkPlugin = InsertExternalChunkPlugin;
