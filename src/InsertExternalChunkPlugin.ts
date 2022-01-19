import * as Webpack from "webpack";

/**
 * This plugin extends the HtmlWebpackPlugin by inserting an external chunk so that it loads after the
 * commons chunk, but before any chunks that are part of the compilation.
 */
export class InsertExternalChunkPlugin {
  constructor(private chunkPath: string) {
  }

  apply(compiler: Webpack.Compiler) {
    compiler.hooks.compilation.tap('html-webpack-plugin-alter-chunks', (compilation) => {
      // Create the external chunk
      const newChunk = new Webpack.Chunk('external-chunk');
      newChunk.files.add(this.chunkPath);
      // Put the existing chunks in an array
      let existingChunks = Array.from(compilation.chunks.values());
      // Put the external chunk in the same array at index 1
      existingChunks.splice(1, 0, newChunk)
      // Create a new set of all chunks
      compilation.chunks = new Set<Webpack.Chunk>(existingChunks);
    })
  }
}
