declare module 'webpack-isomorphic-tools' {
    import {WebpackIsomorphicToolsPluginOptions} from 'webpack-isomorphic-tools/plugin';

    class WebpackIsomorphicTools {
        constructor(configuration: WebpackIsomorphicToolsPluginOptions);
        development(isDevelopmentMode: boolean): WebpackIsomorphicTools;
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

declare module 'webpack-isomorphic-tools/plugin' {
    import * as webpack from 'webpack';

    class WebpackIsomorphicToolsPlugin {
        constructor(configuration: WebpackIsomorphicToolsPlugin.WebpackIsomorphicToolsPluginOptions);

        development(isDevelopmentMode?: boolean): WebpackIsomorphicToolsPlugin;
        regular_expression(opt: any): Function;

        static style_loader_filter(module: webpack.Module, regular_expression: RegExp, options?, log?): boolean;
        static style_loader_path_extractor: string;
        static css_loader_parser: string;
    }

    namespace WebpackIsomorphicToolsPlugin {
        interface WebpackIsomorphicToolsPluginAssetsOptions {
            images: { extensions: string[] };
            html: { extension: string };
            fonts: { extension: string };
            styles: {
                extension: string,
                filter(module: webpack.Module, regularExpression: RegExp, options?: any, log?: any): any,
                path: string,
                parser: string
            };
        }

        interface WebpackIsomorphicToolsPluginOptions {
            requireContext?: boolean;
            debug?: boolean;
            webpackAssetsFilePath?: string;
            webpackStatsFilePath?: string;
            assets: WebpackIsomorphicToolsPluginAssetsOptions;
        }
    }

    export = WebpackIsomorphicToolsPlugin;
}
