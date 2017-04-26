"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A webpack plugin that ensures that delegated modules get a module name so that it is consistent across builds.
 */
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
