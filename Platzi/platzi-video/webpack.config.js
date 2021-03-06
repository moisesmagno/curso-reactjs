const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'entries', 'home.js'),
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public')
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [{loader: 'style-loader'},{loader: 'css-loader'},{loader: 'sass-loader'}]
            },
            {
              test: /\.(jpg|png|gif|svg)$/,
              use: {
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  fallback: 'file-loader',
                  name: 'public/images/[name].[hash].[ext]',
                }
              }
            },
        ]
    }
};
