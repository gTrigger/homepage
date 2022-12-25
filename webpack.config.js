module.exports = {
    module: {
        rules: [
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 25000,
                },
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[hash].[ext]',
                },
            },
            {
                test: /\.svg$/,
                include: [resolve('src/icons')],
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            extract: true,
                            outputPath: 'static/assets/'
                        }
                    }
                ]
            }
        ],
    },
};
