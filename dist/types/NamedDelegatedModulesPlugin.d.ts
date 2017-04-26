/// <reference types="webpack" />
import * as Webpack from "webpack";
/**
 * A webpack plugin that ensures that delegated modules get a module name so that it is consistent across builds.
 */
export declare class NamedDelegatedModulesPlugin {
    constructor();
    apply(compiler: Webpack.Compiler): void;
}
