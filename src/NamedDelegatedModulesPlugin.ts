import * as Webpack from "webpack";

/**
 * A webpack plugin that ensures that delegated modules get a module name so that it is consistent across builds.
 */
export class NamedDelegatedModulesPlugin {
    constructor() {
    }

    apply(compiler: Webpack.Compiler) {
      compiler.plugin("compilation", (compilation) => {
			  compilation.plugin("before-module-ids", (modules: any) => {
				  modules.forEach((module: any) => {
					  if (module.constructor.name === "DelegatedModule") {
              module.id = module.request;
            }
				  });
			  });
		  });
    }
}
