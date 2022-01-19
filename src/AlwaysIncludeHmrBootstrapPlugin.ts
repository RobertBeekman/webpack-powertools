import * as Webpack from "webpack";

/**
 * This plugin ensures that the required bootstrapping for Webpack HMR is inserted into the entry-point for the application.
 * By doing this, any subsequent compilations that use the resulting bundle can use HMR.
 */
export class AlwaysIncludeHmrBootstrapPlugin {
    constructor(private entryName: string) {
    }

    apply(compiler: Webpack.Compiler) {
        if (!compiler.options.entry) {
            // If there is no entry, simply do nothing
            return;
        }

        if (!compiler.options.devServer) {
            // If the devServer is not configured, simply do nothing
            return;
        }

        const entry: string[] = compiler.options.entry[this.entryName];
        if (!entry) {
            // Couldn't find an entry with the provided name
            throw new Error(`Unable to find entry with name ${this.entryName}`);
        }

        const devServerPath = `http://localhost:${compiler.options.devServer.port}${compiler.options.devServer.publicPath}`;
        compiler.options.entry["app"].splice(0, 0,
            "./node_modules/webpack-dev-server/client/index.js?" + devServerPath,
            "webpack/hot/dev-server"
        );
    }
}
