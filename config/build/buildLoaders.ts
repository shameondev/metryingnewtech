import webpack from "webpack";

export const buildLoaders = (): webpack.RuleSetRule[] => {

    const cssLoaders = {
            test: /\.s[ac]ss$/i,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
            ],
        };

    const typesriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        };

    return [
        typesriptLoader,
        cssLoaders
    ]
};
