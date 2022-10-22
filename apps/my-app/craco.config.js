const CracoSwcPlugin = require('craco-swc');
const path = require('path');
const { getLoader, loaderByName } = require('@craco/craco');

const absolutePath = path.join(__dirname, '../../packages/ui');

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            const { isFound, match } = getLoader(webpackConfig, loaderByName('babel-loader'));
            console.error(123)
            console.error(isFound)
            if (isFound) {
                const include = Array.isArray(match.loader.include) ? match.loader.include : [match.loader.include];
                console.log(include)
                match.loader.include = include.concat[absolutePath];
            }
            return webpackConfig;
        },
    },
    babel: {
        plugins: ['@emotion/babel-plugin'],
    },
    /*
    plugins: [
        {
            plugin: CracoSwcPlugin,
            options: {
                swcLoaderOptions: {
                    jsc: {
                        externalHelpers: true,
                        target: 'es2015',
                        parser: {
                            "syntax": "typescript",
                            "tsx": false,
                            jsx: true,
                            dynamicImport: true,
                            exportDefaultFrom: true,
                        },
                        experimental: {
                            plugins: [ ['@swc/plugin-emotion', {}] ]
                        }
                    },
                },
            },
        },
    ],
     */
};