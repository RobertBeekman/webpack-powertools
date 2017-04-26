import * as Webpack from "webpack";

/**
 * This plugin extends the HtmlWebpackPlugin by inserting an external chunk so that it loads after the
 * commons chunk, but before any chunks that are part of the compilation.
 */
export class InsertExternalChunkPlugin {
    constructor(private chunkPath: string) {
    }

    apply(compiler: Webpack.Compiler) {
        compiler.plugin("compilation", (compilation) => {
            compilation.plugin("html-webpack-plugin-alter-chunks", (chunks: any) => {
                chunks.splice(1, 0, {
                    names: [ 'external-chunk' ],
                    files: [ this.chunkPath ]
                });
                return chunks;
            });
        })
    }
}
