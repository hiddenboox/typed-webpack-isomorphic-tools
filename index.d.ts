declare module 'webpack-isomorphic-tools' {
    import * as webpackIsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin';

    class WebpackIsomorphicTools {
        constructor(configuration: webpackIsomorphicToolsPlugin);

        development(isDevelopmentMode:boolean): WebpackIsomorphicTools;

        server(context: string, callback: Function);

        refresh(): void;

        assets(): WebpackIsomorphicTools.Assets;
    }

    namespace WebpackIsomorphicTools {
        interface Assets {
            javascript?: Array<string>;
            styles?: Array<string>;
        }
    }

    export = WebpackIsomorphicTools;
}
