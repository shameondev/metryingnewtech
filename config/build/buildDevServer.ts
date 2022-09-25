import { Configuration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = (options: BuildOptions): Configuration => ({
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
});
