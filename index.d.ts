declare module 'webpack-isomorphic-tools' {
    import * as webpackIsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin';

    export class WebpackIsomorphicTools {
        constructor(configuration: webpackIsomorphicToolsPlugin.WebpackIsomorphicToolsPlugin);

        development(isDevelopmentMode:boolean): WebpackIsomorphicTools;

        server(context:string, callback:Function);

        refresh():void;

        assets(): Assets;
    }

    export interface Assets {
        javascript?: Array<string>;
        styles?: Array<string>;
    }
}

declare module 'webpack-isomorphic-tools/plugin' {
    import * as webpack from 'webpack';

    export class WebpackIsomorphicToolsPlugin {
        constructor(configuration: WebpackIsomorphicToolsPluginOptions);

        development(isDevelopmentMode?: boolean): WebpackIsomorphicToolsPlugin;
        regular_expression(opt: any): Function;

        static style_loader_filter(module: webpack.Module, regular_expression: RegExp, options?, log?): boolean;
        static style_loader_path_extractor: string;
        static css_loader_parser: string;
    }

    export interface WebpackIsomorphicToolsPluginAssetsOptions {
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

    export interface WebpackIsomorphicToolsPluginOptions {
        requireContext?: boolean;
        debug?: boolean;
        webpackAssetsFilePath?: string;
        webpackStatsFilePath?: string;
        assets: WebpackIsomorphicToolsPluginAssetsOptions;
    }
}
