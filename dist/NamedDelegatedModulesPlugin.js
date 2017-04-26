"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NamedDelegatedModulesPlugin {
    constructor() {
    }
    apply(compiler) {
        compiler.plugin("compilation", (compilation) => {
            compilation.plugin("before-module-ids", (modules) => {
                modules.forEach((module) => {
                    if (module.constructor.name === "DelegatedModule") {
                        module.id = module.request;
                    }
                });
            });
        });
    }
}
exports.NamedDelegatedModulesPlugin = NamedDelegatedModulesPlugin;
