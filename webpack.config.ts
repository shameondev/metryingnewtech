import path from 'path';
import webpack from 'webpack';

import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/build/types/config";

const PATHS: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

const MODE = 'development'
const isDev = MODE === 'development'

const config: webpack.Configuration = buildWebpackConfig({
    mode: MODE,
    paths: PATHS,
    isDev,
});

export default config;