"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InjectParentAppBundlePlugin {
    constructor() {
    }
    apply(compiler) {
        compiler.plugin("compilation", (compilation) => {
            compilation.plugin("html-webpack-plugin-alter-chunks", (chunks) => {
                chunks.splice(1, 0, {
                    names: ['app'],
                    files: ['node_modules/@rrwfm/rr/dist/app.bundle.js']
                });
                return chunks;
            });
        });
    }
}
exports.InjectParentAppBundlePlugin = InjectParentAppBundlePlugin;
