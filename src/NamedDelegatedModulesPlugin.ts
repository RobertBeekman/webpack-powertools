import * as Webpack from "webpack";

/**
 * A webpack plugin that ensures that delegated modules get a module name so that it is consistent across builds.
 */
export class NamedDelegatedModulesPlugin {

    apply(compiler: Webpack.Compiler) {
        compiler.hooks.compile.tap('named-delegated-modules', params => {
            params.normalModuleFactory.hooks.module.tap('named-delegated-modules', (module) => {
                const normalModule = module as Webpack.NormalModule;
                if (normalModule && normalModule.userRequest && normalModule.userRequest.indexOf("node_modules") > 0) {
                    normalModule.userRequest = "./" + normalModule.userRequest.substring(normalModule.userRequest.indexOf("node_modules"));
                }
                return module;
            });
        })

        compiler.hooks.compilation.tap('named-delegated-modules', compilation => {
            compilation.hooks.beforeModuleIds.tap('named-delegated-modules', modules => {
                for (const module of modules) {
                    const normalModule = module as Webpack.NormalModule;
                    if (normalModule && normalModule.constructor.name === "DelegatedModule") {
                        normalModule.id = normalModule.request;
                    }
                }
            })
        })
    }
}
