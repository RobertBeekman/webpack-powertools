import * as Webpack from "webpack";

export interface Options {
}

export class AlwaysIncludeHmrBootstrapPlugin {
    private options: Options;
    constructor(options: Options = {}) {
        this.options = options;
    }

    apply(compiler: Webpack.Compiler) {
      if (compiler.options.entry) {
        compiler.options.entry["app"].splice(2, 0, 
            "./node_modules/webpack-dev-server/client/index.js?http://localhost:9000",
            "webpack/hot/dev-server"
        );
      }
    }
}
