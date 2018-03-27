"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NormalizedModulesPlugin {
    apply(normalModuleFactory) {
        normalModuleFactory.plugin("module", (module) => {
            console.log("NormalizedModulesPlugin", module.userRequest);
            if (module.userRequest && module.userRequest.indexOf("node_modules") > 0) {
                module.userRequest = "./" + module.userRequest.substring(module.userRequest.indexOf("node_modules"));
            }
            return module;
        });
    }
}
exports.NormalizedModulesPlugin = NormalizedModulesPlugin;
