"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NormalizedModulesPlugin {
    apply(normalModuleFactory) {
        // Add a "module" plugin that normalizes requests to node_modules so that they are always relative from the current app
        // This avoids the issue of modules being included in multiple bundles while they should be delegated from the vendor bundle
        normalModuleFactory.plugin("module", (module) => {
            if (module.userRequest && module.userRequest.indexOf("node_modules") > 0) {
                module.userRequest = "./" + module.userRequest.substring(module.userRequest.indexOf("node_modules"));
            }
            return module;
        });
    }
}
exports.NormalizedModulesPlugin = NormalizedModulesPlugin;
