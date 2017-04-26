import * as Webpack from "webpack";

export class InjectParentAppBundlePlugin {
    constructor() {
    }

    apply(compiler: Webpack.Compiler) {
        compiler.plugin("compilation", (compilation) => {
            compilation.plugin("html-webpack-plugin-alter-chunks", (chunks: any) => {
                chunks.splice(1, 0, {
                    names: [ 'app' ],
                    files: [ 'node_modules/@rrwfm/rr/dist/app.bundle.js' ]
                });
                return chunks;
            });
        })
    }
}
