module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
        ],
    },
    devServer: {
        compress: true,
        port: 9000,
    },
};
