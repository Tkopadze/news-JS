const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = {
    entry: path.resolve(__dirname, './src/index.ts'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                loader: 'ts-loader'
            }
        ],
    },
    resolve: {
        extensions: ['.js','.ts','.webpack.js'],
    },
    output: {
        chunkFilename: '[name].js',
        filename: '[name].js'
    },
    // devServer: {
    //     static: path.join(__dirname, 'public/'),
    //     devMiddleware: {
    //       publicPath: '../dist/'
    //     },
    //     port: 3000,
    //     hot: "only"
    //   },

    devServer: {
        onAfterSetupMiddleware: function (devServer) {
          if (!devServer) {
            throw new Error('webpack-dev-server is not defined');
          }
    
          devServer.app.get('/some/path', function (req, res) {
            res.json({ custom: 'response' });
          });
        },
      },

      
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./src/webpack.prod.config') : require('./src/webpack.dev.config');

    return merge(baseConfig, envConfig);

};
