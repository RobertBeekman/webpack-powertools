"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AlwaysIncludeHmrBootstrapPlugin {
    constructor(options = {}) {
        this.options = options;
    }
    apply(compiler) {
        if (compiler.options.entry) {
            compiler.options.entry["app"].splice(2, 0, "./node_modules/webpack-dev-server/client/index.js?http://localhost:9000", "webpack/hot/dev-server");
        }
    }
}
exports.AlwaysIncludeHmrBootstrapPlugin = AlwaysIncludeHmrBootstrapPlugin;
