"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NormalizedModulesPlugin_1 = require("./NormalizedModulesPlugin");
/**
 * A webpack plugin that ensures that delegated modules get a module name so that it is consistent across builds.
 */
class NamedDelegatedModulesPlugin {
    constructor() {
    }
    apply(compiler) {
        compiler.plugin("compile", (params) => {
            params.normalModuleFactory.apply(new NormalizedModulesPlugin_1.NormalizedModulesPlugin());
        });
        compiler.plugin("compilation", (compilation, params) => {
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
