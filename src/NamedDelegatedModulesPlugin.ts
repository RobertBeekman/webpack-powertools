import * as Webpack from "webpack";

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
